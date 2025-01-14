const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, address, jobSummary, education, experience } = req.body;

  //prompt using openai api
  let userContent = `
    Create a professional and tailored resume with the following details:
    
    Name: ${name}
    Address: ${address}
    Summary: ${jobSummary}
    Education: ${education}
    Experience: ${experience}
  `;

  // Conditionally include email and phone
  if (email) userContent += `\nEmail: ${email}`;
  if (phone) userContent += `\nPhone: ${phone}`;

  userContent += `
    Based on the provided details, infer relevant roles, responsibilities, achievements, and additional qualifications that align with the desired role. 
    Only provide the resume content. Do not include the job summary or any concluding remarks. 
    Format the output in valid HTML with proper headings (<h2>, <h3>), bold titles, and lists (<ul>, <li>). Ensure it's visually appealing and ready for rendering in a browser.
  `;

  const messages = [
    {
      role: 'system',
      content: 'You are an expert resume builder. Craft resumes tailored to the job description provided, inferring suitable roles, responsibilities, and achievements when necessary.',
    },
    {
      role: 'user',
      content: userContent,
    },
  ];

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    // Get the generated resume content
    const resume = response.data.choices[0].message.content.trim();
    res.json({ resume });
  } catch (error) {
    console.error('Error generating resume:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate resume' });
  }
});

module.exports = router;

# Resume Builder
## Overview
The **Automatic Resume Builder** is a web application that generates professional resumes using OpenAI's GPT-3.5 API. Users can input their personal details, education, experience, and job summary, and the application will format a well-structured resume in HTML.

## Features
- User-friendly web interface for inputting resume details
-  Generates a well-structured resume using OpenAI API
- Renders resume content in a new browser tab
- Responsive and visually appealing UI

## Technologies Used

- Node.js with Express
- OpenAI API for resume generation
- HTML, CSS, JavaScript for frontend
- Axios for API requests
- dotenv for environment variable management

## Installation
1) **Clone the repository:** git clone https://github.com/zuuhaaib/resumeBuilder.git
cd resumeBuilder
2) **add your OpenAI API key in the .env file:** OPENAI_API_KEY=your_openai_api_key
3) **install dependencies:** npm install
4) **Open a browser and go to:** http://localhost:3000

```
/resumeBuilder
│── node_modules/
│── public/
│   ├── index.html       # Frontend UI
│── routes/
│   ├── resumeRoutes.js  # API route to generate resume
│── .env                 # Environment variables
│── README.md            # Project documentation
│── package.json         # Dependencies and scripts
│── package-lock.json
│── server.js            # Express server setup
```

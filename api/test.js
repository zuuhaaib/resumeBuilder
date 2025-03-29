const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Test route to check if the environment variable is accessible
app.get('/test', (req, res) => {
  res.send(`OpenAI API Key: ${process.env.OPENAI_API_KEY}`);
});

module.exports = app;

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');
const resumeRoutes = require('./routes/resumeRoutes');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/generate-resume', resumeRoutes);

console.log(process.env.OPENAI_API_KEY);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

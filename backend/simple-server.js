// simple-server.js
// A simplified version of your server to help diagnose issues

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if the API key is set
if (!process.env.OPENAI_API_KEY) {
  console.error('⚠️ OPENAI_API_KEY is not set in your .env file');
  console.error('Please create a .env file with your OpenAI API key:');
  console.error('OPENAI_API_KEY=your_api_key_here');
  process.exit(1);
}

// Create express app
const app = express();

// Configure middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Simple test endpoint that doesn't require API calls
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is working!' });
});

// Simplified haiku endpoint that doesn't call OpenAI
app.post('/api/haiku', (req, res) => {
  console.log('Received request to /api/haiku with prompt:', req.body.prompt);
  
  // Send a mock response without calling OpenAI
  res.json({ 
    haiku: "Silicon thinking,\nElectric dreams becoming real,\nHumanity's guide." 
  });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Simple test server running on http://localhost:${PORT}`);
  console.log('Try these endpoints:');
  console.log(`- GET http://localhost:${PORT}/api/test`);
  console.log(`- POST http://localhost:${PORT}/api/haiku (with JSON body: {"prompt": "your prompt here"})`);
});
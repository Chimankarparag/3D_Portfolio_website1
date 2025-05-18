// start-server.js
// A simple script to start your server with proper error handling

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Check if .env file exists
try {
  const envPath = path.resolve('.env');
  if (!fs.existsSync(envPath)) {
    console.error('⚠️ .env file not found! Creating a template .env file...');
    fs.writeFileSync(envPath, 'OPENAI_API_KEY=your_openai_api_key_here\n');
    console.error('⚠️ Please edit the .env file and add your OpenAI API key!');
    process.exit(1);
  }
} catch (error) {
  console.error('Error checking .env file:', error);
}

// Start the server with proper error handling
try {
  console.log('🚀 Starting the backend server...');
  execSync('node server.js', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
}
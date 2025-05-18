import express from "express";
import cors from "cors";
import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Configure CORS to allow all origins for now
app.use(cors({
  origin: "*", // Allow all origins
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Create OpenAI client with error handling
let openai;
try {
  openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  console.log("OpenAI client initialized successfully");
} catch (error) {
  console.error("Failed to initialize OpenAI client:", error);
}

// Test endpoint to verify server is working
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend server is working!" });
});

// Haiku endpoint with detailed error handling
app.post("/api/haiku", async (req, res) => {
  console.log("Received haiku request with prompt:", req.body.prompt);
  
  // Check if OpenAI client was initialized
  if (!openai) {
    console.error("OpenAI client not initialized");
    return res.status(500).json({ error: "OpenAI client not initialized" });
  }
  
  // Check if prompt exists
  if (!req.body.prompt) {
    console.error("No prompt provided");
    return res.status(400).json({ error: "Prompt is required" });
  }
  
  try {
    console.log("Calling OpenAI API...");
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: req.body.prompt }],
    });
    
    console.log("OpenAI API response received");
    if (!completion.choices || !completion.choices[0] || !completion.choices[0].message) {
      console.error("Invalid response from OpenAI:", completion);
      return res.status(500).json({ error: "Invalid response from OpenAI" });
    }
    
    const haiku = completion.choices[0].message.content;
    console.log("Haiku generated:", haiku);
    res.json({ haiku });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ 
      error: "Error calling OpenAI API", 
      details: err.message,
      stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined
    });
  }
});

// Use port 5001 since frontend is now on 5000
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
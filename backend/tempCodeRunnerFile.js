import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AzureKeyCredential } from "@azure/core-auth";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
dotenv.config();

const app = express();

// Configure CORS to allow all origins for now
app.use(cors({
  origin: "*", // Allow all origins
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Initialize GitHub AI client
const githubToken = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

// Test endpoint to verify server is working
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend server is working!" });
});

// Haiku endpoint with detailed error handling
app.post("/api/haiku", async (req, res) => {
  console.log("Received haiku request with prompt:", req.body.prompt);
  
  // Check if prompt exists
  if (!req.body.prompt) {
    console.error("No prompt provided");
    return res.status(400).json({ error: "Prompt is required" });
  }
  
  try {
    console.log("Calling GitHub AI API...");
    
    const client = ModelClient(
      endpoint,
      new AzureKeyCredential(githubToken)
    );
    
    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: "You are a haiku generator. Create a beautiful haiku based on the user's prompt." },
          { role: "user", content: req.body.prompt }
        ],
        temperature: 1,
        top_p: 1,
        model: model
      }
    });
    
    if (isUnexpected(response)) {
      console.error("GitHub AI API error:", response.body.error);
      throw new Error(response.body.error?.message || "Unexpected error from GitHub AI API");
    }
    
    const haiku = response.body.choices[0].message.content;
    console.log("Haiku generated:", haiku);
    res.json({ haiku });
    
  } catch (err) {
    console.error("GitHub AI API error:", err);
    res.status(500).json({ 
      error: "Error calling GitHub AI API", 
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
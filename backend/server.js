// Import Required Packages

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import Database Connection
const connectDB = require("./config/db");


// Import Routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Load Environment Variables
dotenv.config();


// Connect to MongoDB Database
connectDB();


// Initialize Express App
const app = express();


// Middleware


// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());


// API Routes


// Authentication Routes
app.use("/api/auth", authRoutes);

// Blog Post Routes
app.use("/api/posts", postRoutes);

// Comment Routes 
app.use("/api/comments", commentRoutes);


// Default Route
app.get("/", (req, res) => {
  res.send("Blog Platform API is Running...");
});


// Handle Invalid Routes
app.use((req, res) => { 
    res.status(404).json({ 
        message: "Route Not Found", 
    }); 
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
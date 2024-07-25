const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
// const signinRoutes = require("./routes/signinRoutes");
// const loginRoutes = require("./routes/loginRoutes");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to handle form data

// Routes
app.use("/api/blogs", blogRoutes);
// app.use("/api/signin", signinRoutes);
// app.use("/api/login", loginRoutes); // Ensure this is correct
app.use("/api/contact", contactRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

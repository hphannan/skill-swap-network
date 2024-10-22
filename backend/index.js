const express = require('express');
const connectDB = require('./config/db'); // Importing the database connection
const testRoute = require('./routes/authRoutes.js'); // Your authentication routes

const app = express();

// Connect to MongoDB
connectDB(); // Make sure to call this to establish a connection

// Middleware to parse JSON
app.use(express.json());

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Use the authentication routes
app.use('/api', testRoute);

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

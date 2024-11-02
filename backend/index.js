const express = require('express');
const connectDB = require('./config/db');
const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api', authRoutes);
app.use('/api', skillRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// Routes
app.use('/api', authRoutes);
app.use('/api', skillRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

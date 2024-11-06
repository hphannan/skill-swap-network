const express = require('express');
const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');
const skillExchangeRouter = require('./routes/skillExchangeRequestRoute');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

connectDB();
// Routes
app.use('/api', authRoutes);
app.use('/api', skillRoutes);
app.use('/api', skillExchangeRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

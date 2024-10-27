
const express = require('express');
const connectDB = require('./config/db.js')
const UserModel = require('./models/User.js')
const authRoute = require('./routes/authRoutes.js')
const app = express();


//Middleware
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

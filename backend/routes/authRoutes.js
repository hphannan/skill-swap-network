const express = require('express');
const router = express.Router();
const User = require('../models/User.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());
// Register Route

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email, password,age, skills } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword,age, skills });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            token,
            message: 'User registered successfully',
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              skill: user.skills, // Assuming skill is a field in your database
            }
          });
          
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).populate('skills'); 
        console.log(user); // Add this line to check the user object
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({
            token,
            message: "login successful",
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              age: user.age,
              skill:  user.skills && Array.isArray(user.skills) ? user.skills.map(skill => skill.name) : []
            }
        });
    } catch (error) {
        console.error("Login Error:", error); // Log the error details
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/api/user-actions', async (req, res) => {
    const { userId } = req.body;
  
    try {
      const newAction = new UserAction({ userId});
      await newAction.save();
      res.send({ message: 'Action saved successfully' });
    } catch (error) {
      console.error('Error saving action:', error);
      res.status(500).send({ message: 'Internal server error' });
    }
  });
  



module.exports = router;

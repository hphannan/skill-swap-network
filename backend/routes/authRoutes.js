const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Protected Route Example
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Access granted to protected route' });
});

module.exports = router;

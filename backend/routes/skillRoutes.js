// routes/skillRoutes.js

const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const Skill = require('../models/Skill');
const router = express.Router();

// Route to create a new skill
router.post('/skills', async (req, res) => {
    const { name, description, category, user, duration ,requirements, availability } = req.body;

    console.log(req.body);

    // Check for required fields
    if (!name || !description || !category) {
        return res.status(400).json({ message: 'Name, description, and category are required.' });
    }

    try {
        // Create a new skill with all the fields
        const skill = new Skill({
            name,
            description,
            category,
            user,
            duration,
            requirements: requirements || '', // Default to empty string if not provided
            availability: availability || [], // Default to empty array if not provided
        });

        // Save the skill to the database
        const savedSkill = await skill.save();
        console.log('Skill saved');

        const updatedUser = await User.findByIdAndUpdate(
            user,
            { $push: { skills: savedSkill._id } }, // Add the skill's ID to the user's skills array
            { new: true, useFindAndModify: false } // Return the updated user and avoid deprecation warnings
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        console.log('User updated:', updatedUser);
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
});

router.get('/skills/:id', async (req, res) => {
    const userId = req.params.id; try {
        const user = await User.findById(userId).populate('skills');
        if (!user || !user.skills) { return res.status(404).json({ message: 'Skills not found' }); } res.json(user.skills);
    } catch (error) {
        console.error("Error fetching skills:", error);
        res.status(500).json({ message: 'Server error' });
    }
});
// Route to get all skills
router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
});

// Route to update a skill by ID
router.put('/skills/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, category, user } = req.body;
    try {
        const skill = await Skill.findById(id);
        if (!skill || skill.user.toString() !== user) {
            return res.status(404).json({ message: 'Skill not found or not authorized' });
        }
        skill.name = name || skill.name;
        skill.description = description || skill.description;
        skill.category = category || skill.category;
        await skill.save();
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
}
);

// Route to delete a skill by ID
router.delete('/skills/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Find the skill by ID
        const skill = await Skill.findById(id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found or not authorized' });
        }

        // Update the isDeleted flag to true
        skill.isDeleted = true;
        await skill.save();

        res.status(200).json({ message: 'Skill soft deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
});


module.exports = router;

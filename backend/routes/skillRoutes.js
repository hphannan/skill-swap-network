// routes/skillRoutes.js

const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Skill = require('../models/Skill');
const router = express.Router();

// Route to create a new skill
router.post('/skills', authMiddleware, async (req, res) => {
    const { name, description, category ,user } = req.body;
    if (!name || !description || !category) {
        return res.status(400).json({ message: 'Name, description, and category are required.' });
    }
    try {
        const skill = new Skill({
            name,
            description,
            category,
            user,
        });
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error:  error.message,
        });
    }
});

// Route to get all skills
router.get('/skills',async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error:  error.message,
        });
    }
});

// Route to update a skill by ID
router.put('/skills/:id', authMiddleware, async (req, res) => {
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
            error:  error.message,
        });
    }
}
);

// Route to delete a skill by ID
router.delete('/skills/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        // Find the skill by ID
        const skill = await Skill.findById(id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found or not authorized' });
        }
        
        // Use findByIdAndDelete directly with the ID
        await Skill.findByIdAndDelete(id);

        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
});


module.exports = router;

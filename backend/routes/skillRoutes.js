// routes/skillRoutes.js

const express = require('express');
const { createSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/skillController');
const authMiddleware = require('../middleware/authMiddleware');
const Skill = require('../models/Skill');
const router = express.Router();

// Route to create a new skill
router.post('/skills', authMiddleware, async (req, res) => {
    const { name, description, category } = req.body;
    try {
        const skill = new Skill({
            name,
            description,
            category,
            user: req.user.id,
        });
        await skill.save();
        res.status(201).json(skill);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
);

// Route to get all skills
router.get('/skills',async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to update a skill by ID
router.put('/skills/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { name, description, category } = req.body;
    try {
        const skill = await Skill.findById(id);
        if (!skill || skill.user.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Skill not found or not authorized' });
        }
        skill.name = name || skill.name;
        skill.description = description || skill.description;
        skill.category = category || skill.category;
        await skill.save();
        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
);

// Route to delete a skill by ID
router.delete('/skills/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await Skill.findById(id);
        if (!skill || skill.user.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Skill not found or not authorized' });
        }
        await skill.remove();
        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}
);

module.exports = router;

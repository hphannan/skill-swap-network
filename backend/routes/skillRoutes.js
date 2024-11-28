// routes/skillRoutes.js

const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const Skill = require('../models/Skill');
const router = express.Router();

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });
  const upload = multer({ storage });
// Route to create a new skill
router.post('/skills', upload.single('image'), async (req, res) => {
    const { name, description, category, user, duration, requirements, availability } = req.body;
  
    if (!req.file) return res.status(400).json({ message: 'Image is required.' });
  
    try {
      const skill = new Skill({
        name,
        description,
        category,
        user,
        duration,
        requirements: requirements || '',
        availability: availability ? JSON.parse(availability) : [],
        image: req.file.path, // Save image path
      });
  
      const savedSkill = await skill.save();
      const updatedUser = await User.findByIdAndUpdate(
        user,
        { $push: { skills: savedSkill._id } },
        { new: true }
      );
  
      if (!updatedUser) return res.status(404).json({ message: 'User not found.' });
  
      res.status(201).json(savedSkill);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });

router.get('/skills/:id', async (req, res) => {
    const userId = req.params.id;
    try {
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
        const skills = await Skill.find().populate('user', 'name'); // Populate 'user' field with 'name'
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
});

router.put('/skills/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, category, user, image } = req.body; // Include image in request body
  
    try {
      const skill = await Skill.findById(id);
      if (!skill ) {
        return res.status(404).json({ message: 'Skill not found or not authorized' });
      }
  
      // Update fields if provided
      skill.name = name || skill.name;
      skill.description = description || skill.description;
      skill.category = category || skill.category;
      skill.image = image || skill.image; // Update the image field
  
      await skill.save();
      res.status(200).json(skill);
    } catch (error) {
      res.status(500).json({
        message: 'Server error',
        error: error.message,
      });
    }
  });

// // Route to update a skill by ID
// router.put('/skills/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description, category, user } = req.body;
//     try {
//         const skill = await Skill.findById(id);
//         if (!skill || skill.user.toString() !== user) {
//             return res.status(404).json({ message: 'Skill not found or not authorized' });
//         }
//         skill.name = name || skill.name;
//         skill.description = description || skill.description;
//         skill.category = category || skill.category;
//         await skill.save();
//         res.status(200).json(skill);
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server error',
//             error: error.message,
//         });
//     }
// }
// );

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

const express = require('express');
const router = express.Router();
const SkillExchangeRequest = require('../models/SkillExchangeRequest'); // Adjust path as needed
const authMiddleware = require('../middleware/authMiddleware');
const User =  require('../models/User.js')
const Skill =  require('../models/Skill.js')
// POST /api/requests - Create a skill exchange request
router.post('/request', async (req, res) => {
    const { requesterId, receiverId, skillOfferedId, skillRequestedId } = req.body;
    try {
        // Validate and check if users and skills exist
        const requester = await User.findById(requesterId);
        const receiver = await User.findById(receiverId);
        const skillOffered = await Skill.findById(skillOfferedId);
        const skillRequested = await Skill.findById(skillRequestedId);

        if (!requester || !receiver || !skillOffered || !skillRequested) {
            return res.status(400).json({ message: 'Invalid data provided.' });
        }

        // Create the skill exchange request
        const newExchangeRequest = new SkillExchangeRequest({
            requester: requesterId,
            receiver: receiverId,
            skillOffered: skillOfferedId,
            skillRequested: skillRequestedId,
        });

        // Save the exchange request in the database
        await newExchangeRequest.save();
        res.status(201).json({ message: 'Skill exchange request created successfully.' });
    } catch (error) {
        console.error('Error creating exchange request:', error);
        res.status(500).json({ message: 'Server error while processing the request.' });
    }
});
router.get('/requests/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const exchangeRequests = await SkillExchangeRequest.find({
            $or: [{ requester: userId }, { receiver: userId }],
        })
            .populate('requester receiver skillOffered skillRequested');

        res.json(exchangeRequests);
    } catch (error) {
        console.error('Error fetching exchange requests:', error);
        res.status(500).json({ message: 'Server error while fetching requests.' });
    }
});

// GET /api/requests - Retrieve a list of all skill exchange requests for a user
router.get('/requests', async (req, res) => {
    try {
        const { userId } = req.query; // Assume userId is passed as a query parameter
        const requests = await SkillExchangeRequest.find({
            $or: [{ requester: userId }, { receiver: userId }],
        }).populate('requester receiver skillOffered skillRequested');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/requests/:id/accept - Accept a skill exchange request
router.put('/requests/:id/accept', async (req, res) => {
    try {
        const request = await SkillExchangeRequest.findByIdAndUpdate(
            req.params.id,
            { status: 'accepted' },
            { new: true }
        );
        if (!request) return res.status(404).json({ error: 'Request not found' });
        res.json(request);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/requests/:id/reject - Reject a skill exchange request
router.put('/requests/:id/reject',async (req, res) => {
    try {
        const request = await SkillExchangeRequest.findByIdAndUpdate(
            req.params.id,
            { status: 'rejected' },
            { new: true }
        );
        if (!request) return res.status(404).json({ error: 'Request not found' });
        res.json(request);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

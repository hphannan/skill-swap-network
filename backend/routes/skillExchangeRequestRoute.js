const express = require('express');
const router = express.Router();
const SkillExchangeRequest = require('../models/SkillExchangeRequest'); // Adjust path as needed
const authMiddleware = require('../middleware/authMiddleware');
// POST /api/requests - Create a skill exchange request
router.post('/requests', async (req, res) => {
    try {
        const { requester, receiver, skillOffered, skillRequested } = req.body;
        const newRequest = await SkillExchangeRequest.create({
            requester,
            receiver,
            skillOffered,
            skillRequested,
        });
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ error: error.message });
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

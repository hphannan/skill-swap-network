const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // Duration in hours
    },
    requirements: {
        type: String, // Prerequisites or materials needed
        default: '', // Default to an empty string
    },
    availability: [
        {
            day: {
                type: String, // E.g., 'monday'
            },
            startTime: {
                type: String, // E.g., '09:00'
            },
            endTime: {
                type: String, // E.g., '12:00'
            },
        },
    ],
    isDeleted: { type: Boolean, default: false }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);

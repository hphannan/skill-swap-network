const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }]
});

// Export the User modelnp
module.exports = mongoose.model('User', UserSchema);

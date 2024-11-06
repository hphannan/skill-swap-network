const mongoose = require('mongoose');
const { Schema } = mongoose;

const SkillExchangeRequestSchema = new Schema({
  requester: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  skillOffered: { type: Schema.Types.ObjectId, ref: 'Skill', required: true },
  skillRequested: { type: Schema.Types.ObjectId, ref: 'Skill', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('SkillExchangeRequest', SkillExchangeRequestSchema);

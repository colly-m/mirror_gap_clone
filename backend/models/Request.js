// models/Request.js
const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mentee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  request_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);

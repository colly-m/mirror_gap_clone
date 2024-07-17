// models/Assignment.js
const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mentee_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  start_date: { type: Date, default: Date.now },
  end_date: { type: Date, default: () => new Date(Date.now() + 2*30*24*60*60*1000) } // 2 months from start_date
});

module.exports = mongoose.model('Assignment', AssignmentSchema);

// controllers/assignmentController.js
const Assignment = require('../models/Assignment');

exports.createAssignment = async (req, res) => {
  const { mentor_id, mentee_id } = req.body;
  try {
    const assignment = new Assignment({ mentor_id, mentee_id });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('mentor_id mentee_id', 'name email');
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

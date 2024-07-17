// controllers/menteeController.js
const MenteeProfile = require('../models/MenteeProfile');

exports.createMenteeProfile = async (req, res) => {
  const { interests, goals } = req.body;
  try {
    const menteeProfile = new MenteeProfile({ mentee_id: req.user.id, interests, goals });
    await menteeProfile.save();
    res.status(201).json(menteeProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMenteeProfiles = async (req, res) => {
  try {
    const mentees = await MenteeProfile.find().populate('mentee_id', 'name email');
    res.json(mentees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

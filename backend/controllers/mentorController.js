// controllers/mentorController.js
const MentorProfile = require('../models/MentorProfile');

exports.createMentorProfile = async (req, res) => {
  const { expertise, availability } = req.body;
  try {
    const mentorProfile = new MentorProfile({ mentor_id: req.user.id, expertise, availability });
    await mentorProfile.save();
    res.status(201).json(mentorProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMentorProfiles = async (req, res) => {
  try {
    const mentors = await MentorProfile.find().populate('mentor_id', 'name email');
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

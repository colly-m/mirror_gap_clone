// routes/mentorRoutes.js
const express = require('express');
const { createMentorProfile, getMentorProfiles } = require('../controllers/mentorController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createMentorProfile);
router.get('/', auth, getMentorProfiles);

module.exports = router;

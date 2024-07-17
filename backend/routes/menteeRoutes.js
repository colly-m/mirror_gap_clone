// routes/menteeRoutes.js
const express = require('express');
const { createMenteeProfile, getMenteeProfiles } = require('../controllers/menteeController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createMenteeProfile);
router.get('/', auth, getMenteeProfiles);

module.exports = router;

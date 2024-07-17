// routes/assignmentRoutes.js
const express = require('express');
const { createAssignment, getAssignments } = require('../controllers/assignmentController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createAssignment);
router.get('/', auth, getAssignments);

module.exports = router;

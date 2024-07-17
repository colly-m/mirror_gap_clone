// routes/requestRoutes.js
const express = require('express');
const { createRequest, updateRequestStatus, getRequests } = require('../controllers/requestController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createRequest);
router.put('/', auth, updateRequestStatus);
router.get('/', auth, getRequests);

module.exports = router;

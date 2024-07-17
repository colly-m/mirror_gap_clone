// controllers/requestController.js
const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  const { mentor_id } = req.body;
  try {
    const request = new Request({ mentor_id, mentee_id: req.user.id });
    await request.save();
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRequestStatus = async (req, res) => {
  const { request_id, status } = req.body;
  try {
    const request = await Request.findById(request_id);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    request.status = status;
    await request.save();
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find({ mentor_id: req.user.id }).populate('mentee_id', 'name email');
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

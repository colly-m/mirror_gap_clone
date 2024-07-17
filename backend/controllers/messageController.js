// controllers/messageController.js
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { receiver_id, message } = req.body;
  try {
    const newMessage = new Message({ sender_id: req.user.id, receiver_id, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ 
      $or: [
        { sender_id: req.user.id },
        { receiver_id: req.user.id }
      ] 
    }).populate('sender_id receiver_id', 'name email');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

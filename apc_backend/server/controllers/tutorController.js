// MongoDB imports will be added as needed
import mongoose from "mongoose";
import { askTutorAI } from "../services/aiTutorService.js";

// ── POST /api/tutor/chat ──────────────────────────────────────
// Send a message to the AI tutor and get a response.
// Body: { message: string, conversationId?: string }
export const chat = async (req, res, next) => {
  try {
    const { message, conversationId } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ error: "message is required" });
    }

    let convId = conversationId;
    let existingMessages = [];

    // Load existing conversation history if continuing a session
    if (convId) {
      const conversation = await mongoose.connection.db.collection('tutor_conversations').findOne({
        _id: new mongoose.Types.ObjectId(convId),
        user_id: new mongoose.Types.ObjectId(req.user.id)
      });
      if (conversation) {
        existingMessages = conversation.messages || [];
      }
    }

    // Build message history for AI context
    const messagesForAI = [
      ...existingMessages,
      { role: "user", content: message.trim() },
    ];

    // Call local Ollama / Claude AI
    const aiReply = await askTutorAI(messagesForAI);

    // Updated messages to persist
    const updatedMessages = [
      ...messagesForAI,
      { role: "assistant", content: aiReply },
    ];

    if (convId) {
      // Update existing conversation
      await mongoose.connection.db.collection('tutor_conversations').updateOne(
        { _id: new mongoose.Types.ObjectId(convId), user_id: new mongoose.Types.ObjectId(req.user.id) },
        { $set: { messages: updatedMessages, updated_at: new Date() } }
      );
    } else {
      // Create a new conversation — use first 80 chars of message as title
      const title = message.trim().substring(0, 80);
      const result = await mongoose.connection.db.collection('tutor_conversations').insertOne({
        user_id: new mongoose.Types.ObjectId(req.user.id),
        title,
        messages: updatedMessages,
        created_at: new Date(),
        updated_at: new Date()
      });
      convId = result.insertedId;
    }

    // Log study activity
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    await mongoose.connection.db.collection('daily_activity').updateOne(
      { user_id: new mongoose.Types.ObjectId(req.user.id), activity_date: today },
      { $inc: { study_minutes: 5 } },
      { upsert: true }
    );

    res.json({
      message: aiReply,
      conversationId: convId,
    });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/tutor/conversations ─────────────────────────────
// Get list of all conversations for the logged-in user
export const getConversations = async (req, res, next) => {
  try {
    const conversations = await mongoose.connection.db.collection('tutor_conversations')
      .find({ user_id: new mongoose.Types.ObjectId(req.user.id) })
      .project({ title: 1, updated_at: 1, created_at: 1 })
      .sort({ updated_at: -1 })
      .limit(30)
      .toArray();
    
    const formatted = conversations.map(c => ({
      id: c._id,
      title: c.title,
      updated_at: c.updated_at,
      created_at: c.created_at
    }));

    res.json({ conversations: formatted });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/tutor/conversations/:id ─────────────────────────
// Get full message history for a specific conversation
export const getConversation = async (req, res, next) => {
  try {
    const conversation = await mongoose.connection.db.collection('tutor_conversations').findOne({
      _id: new mongoose.Types.ObjectId(req.params.id),
      user_id: new mongoose.Types.ObjectId(req.user.id)
    });
    
    if (!conversation) {
      return res.status(404).json({ error: "Conversation not found" });
    }
    res.json({ 
      conversation: {
        id: conversation._id,
        ...conversation
      } 
    });
  } catch (err) {
    next(err);
  }
};

// ── DELETE /api/tutor/conversations/:id ──────────────────────
// Delete a specific conversation
export const deleteConversation = async (req, res, next) => {
  try {
    await mongoose.connection.db.collection('tutor_conversations').deleteOne({
      _id: new mongoose.Types.ObjectId(req.params.id),
      user_id: new mongoose.Types.ObjectId(req.user.id)
    });
    res.json({ message: "Conversation deleted successfully" });
  } catch (err) {
    next(err);
  }
};
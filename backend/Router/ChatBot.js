const express = require("express");
const wrapAsync = require("../Utils/WrapAsync");
const router = express.Router();
const BotChat = require("../Controllers/ChatBotController");
router.post("/ask",wrapAsync(BotChat.ChatBotAI))

module.exports = router;
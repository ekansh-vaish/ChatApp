
const express = require("express");
const router = express.Router();
const {authorization} = require("../Middlewares/JwtToken");
const {validateChat} = require("../Middlewares/UserValidation");
const wrapAsync = require("../Utils/WrapAsync");
const SelfChat = require("../Middlewares/SelfChat");
const ChatController = require("../Controllers/ChatController");

router.get("/userlist",wrapAsync(ChatController.userList)),

router.post("/message/:id",authorization,validateChat,wrapAsync(ChatController.addMessage))


router.get("/conversation/:id", authorization,wrapAsync(ChatController.Conversation));

router.put("/updateChat/:id",authorization,SelfChat,wrapAsync(ChatController.updateChat));


router.delete("/deleteChat/:id",authorization,SelfChat,wrapAsync(ChatController.destroyChat));

module.exports = router;
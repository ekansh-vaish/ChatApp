const ExpressError = require("../Utils/ExpressError");
const Chat = require("../Model/Chat");
const SelfChat =async (req,res,next) =>
{
const userId = req.user.id;   
const chatId = req.params.id;

const chat = await Chat.findById(chatId);

if(chat.By._id.equals(userId))
    {
    next();    
    } 
    else{
     return next(new ExpressError("Authorized only",404))
    
    }
}



module.exports = SelfChat;
const RegisterData = require("../Model/Auth")
const Chat = require("../Model/Chat");
const ExpressError = require("../Utils/ExpressError");


module.exports.addMessage = async (req,res,next) =>
{
const {Message} = req.body;
const senderId = req.user.id;
const receiverId = req.params.id;

const newMessage = new Chat({
Message,
created_At : Date.now(),
By : senderId,
To : receiverId 
})

await newMessage.save();
res.status(201).json({Message : "Chat Added",newMessage});
}


module.exports.userList = async(req,res,next) =>
{
const userList = await  RegisterData.find({});

if (!userList && userList.length === 0) {
return next(new ExpressError("UserList Not found",404))

}

res.status(201).json({Message : "Listed User",userList});
}

module.exports.Conversation = async (req, res,next) => {
const senderId = req.user.id;          
const receiverId = req.params.id;  

const chats = await Chat.find({
  $or: [
    { By: senderId, To: receiverId },
    { By: receiverId, To: senderId }
  ]
}).populate("By To","Username Email Phone image"); 



res.status(200).json({ Message: "Conversation fetched", chats });

}

module.exports.updateChat = async (req,res,next) =>
{
const response = await Chat.findByIdAndUpdate(req.params.id,{$set:req.body});

if(!response)
{
return next(new ExpressError("Chat Not Updated",404))
}
res.status(201).json({Message :"Updated Successfully",response})

}

module.exports.destroyChat = async(req,res,next) =>
{
const response = await Chat.findByIdAndDelete(req.params.id);

if(!response)
{
return next(new ExpressError("Chat not deleted",503))

}
res.status(201).json({Message :"Deleted Successfully",response})


}
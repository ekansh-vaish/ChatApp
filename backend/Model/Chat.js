const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
Message: 
{
type: String,
required: true
},

By: 
{ 
type: mongoose.Schema.Types.ObjectId,
ref: "RegisterData",
required: true
}, 
To: {
type: mongoose.Schema.Types.ObjectId, 
ref: "RegisterData", 
required: true
}, 
created_At: 
{ type: Date, 
default: Date.now
}
});

module.exports = mongoose.model("Chat", ChatSchema);

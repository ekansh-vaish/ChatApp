const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({

Username : 
{
type : String,

},
Email : 
{
type : String,

},
Phone : 
{
type : String,
},
Password :
{
type : String,
  
},
image : 
{
url : String,
filename :   String,
}
});

const RegisterData = mongoose.model("RegisterData",AuthSchema);

module.exports = RegisterData;
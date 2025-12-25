const {generateToken} = require("../Middlewares/JwtToken");
const ExpressError = require("../Utils/ExpressError");
const bcrypt = require('bcrypt');
const RegisterData = require("../Model/Auth");


module.exports.Signup = async(req,res,next) =>
{
const { Username,Email,Phone,Password } = req.body;
let url = req.file.path;
let filename = req.file.filename;

const existingUser = await RegisterData.findOne({ Email });
    if (existingUser) {
   return next(new ExpressError("User Already exist",404));
    }
    const hashedPassword = await bcrypt.hash(Password,4); 
const RegisterUser = new RegisterData(
    {
    Username,
    Email,
    Phone,
    Password : hashedPassword,
    image : {url,filename},  
    }
)



 await RegisterUser.save();

const payload = {
  id : RegisterUser.id,
  Email : RegisterUser.Email,  
  Username : RegisterUser.Username,
  UserImage : RegisterUser.image
}
const token = generateToken(payload);

res.status(201).json({Message : "Successfully Registered",payload,token})
}


module.exports.Login = async(req,res,next) =>
{
const {Email, Password} = req.body;    
const user = await RegisterData.findOne({Email});

if(!user)
{
   return next(new ExpressError("No Data Found",404));
}

const isMatch = await bcrypt.compare(Password,user.Password);

if(!isMatch)
{
res.status(403).json({Message : "invalid access"})    
}

const payload ={
  id:user.id,
  Email : user.Email,  
  Username : user.Username,
  image : user.image
}

const token = generateToken(payload);

res.cookie("token",token,{
 httpOnly:true,
 secure : process.env.NODE_ENV === "production",
   sameSite:"lax" ,
   maxAge: 24 * 60*60*1000,
})

res.status(201).json({message : "Successfully login",payload,token});


}


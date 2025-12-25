const {UserValidate,ChatValidate} = require("../Validation/authValidate");

const validateUser = (req,res,next) =>
{
let {error} = UserValidate.validate(req.body);

if(error)
{
   return next(new ExpressError(error,404));

}
else{
next();    
}
}


const validateChat = (req,res,next) =>
{
let {error} = ChatValidate.validate(req.body);

if(error)
{
   return next(new ExpressError(error,404));

}
else{
next();    
}
}


module.exports = {validateUser,validateChat};
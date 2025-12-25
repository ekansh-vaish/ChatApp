const jwt = require('jsonwebtoken');
require('dotenv').config()


const authorization = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user= data;
  
    return next();
  } catch {
    return res.sendStatus(403);
  }
};


const generateToken = (userData) =>
{
return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn : "1d"})    
}

module.exports ={authorization,generateToken}
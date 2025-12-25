const express = require("express");
const router = express.Router();
const multer = require("multer");
const {validateUser} = require("../Middlewares/UserValidation");
const WrapAsync = require("../Utils/WrapAsync");
const AuthController = require("../Controllers/AuthControllers");
const {storage} = require("../config");


const upload = multer({ storage : storage })

router.post("/register",validateUser,upload.single('image'),WrapAsync(AuthController.Signup))

router.post("/login",WrapAsync(AuthController.Login));
  
router.post("/logout",WrapAsync(async(req, res) => 
  {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",           
    sameSite: "lax",       
  });
  
  return res.status(200).json({ message: "Logged out" });
}));


module.exports = router;
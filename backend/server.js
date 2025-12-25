const express = require("express");
const app = express();
const mongoose = require('mongoose');
const AuthRouter = require("./Router/Auth");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ChatsApp = require('./Router/ChatRouter');
const ChatBot = require("./Router/ChatBot");
const dbUrL = process.env.ATLASDB_URL
const session = require('express-session');
const {MongoStore} = require("connect-mongo");

app.use(
  cors({
    origin: "https://aichatapp-roan.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

async function main()
{
await mongoose.connect(dbUrL) 
}

main().then(() => {

}).catch((err) => {
console.log(err);
    
});


const store = MongoStore.create({
  mongoUrl : dbUrL,
  crypto :{
     secret : "mysupersecretcode"},
     touchAfter : 24 * 3600,

});

app.use(session({
  store,
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
 secure: true, 
     sameSite : "None",
    maxAge: 1000 * 60 * 60 * 24 
  }
}));

app.use('/uploads', express.static('uploads'));
app.use("/auth",AuthRouter)
app.use("/userchat",ChatsApp)
app.use("/gpt",ChatBot)



app.listen(8080,() =>
{
console.log("App is listening to port");
})
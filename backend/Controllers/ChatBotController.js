const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({apiKey:process.env.ChatBot_Key});



module.exports.ChatBotAI = async(req,res) =>
{
try {
  const {prompt} = req.body;
const response = await ai.models.generateContent({
  model : "gemini-2.5-flash",
  contents : prompt,
})

res.json({success : true,answer : response.text});

} 
catch (error) {

res.status(500).json("error",error)
}
}

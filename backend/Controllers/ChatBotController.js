const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // ✅ correct env var
});

module.exports.ChatBotAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    res.json({
      success: true,
      answer: response.candidates[0].content.parts[0].text,
    });
  } catch (error) {
    console.error("GEMINI ERROR 👉", error.message);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

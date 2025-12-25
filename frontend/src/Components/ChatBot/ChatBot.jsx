import React, { useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ChatBot.css"
function ChatBot() {

  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8080/gpt/ask",
      { prompt: prompt }
    );

    setAnswer(response.data.answer);
    setPrompt("")
  }

  return (
    <div className='chatbot-container'>
      <h1>AI Chat Bot</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Ask AI</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="success">Ask</Button>
      </Form>
      {answer && (
        <div style={{ marginTop: "20px" }}>
          <h4>AI Reply:</h4>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ChatBot;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams } from "react-router-dom";

import "./Chats.css";
import Navigation from "../Navigation/Navigation";
import ChatBotModal from "../ChatBot/ChatBotModal";
function Chats() {



const [show, setShow] = useState(false);
const handleClose = () => setShow(false);

const [messageInput, setMessageInput] = useState("");   // input box value
const [conversation, setConversation] = useState([]);
const [editId, setEditId] = useState(null);             // track which message is being edited
const { id } = useParams();
const User = JSON.parse(localStorage.getItem("User"));
const navigate = useNavigate();
async function fetchConversation() {
try {
const res = await axios.get(`http://localhost:8080/userchat/conversation/${id}`, {
withCredentials: true,
});

setConversation(res.data.chats || []);
} catch (error) {
if(error || !User)
{
alert("Session Expired ! Please login");
navigate("/login");    
}
}
}

async function SubmitForm(e) {
e.preventDefault();
try {
if (editId) {

await axios.put(
`http://localhost:8080/userchat/updateChat/${editId}`,
{ Message: messageInput },
{ withCredentials: true }
);
setEditId(null); 
} else {
// Send new chat
await axios.post(
`http://localhost:8080/userchat/message/${id}`,
{ Message: messageInput },
{ withCredentials: true }
);
}
setMessageInput(""); // clear input
fetchConversation();
} catch (error) {
console.log(error);
}
}

async function DeleteChat(upid) {
try {
await axios.delete(`http://localhost:8080/userchat/deleteChat/${upid}`, {
withCredentials: true,
});
fetchConversation();
} catch (error) {
console.log(error);
}
}

useEffect(() => {
fetchConversation();
}, [id]);

return (
<div className="main-chat-container">
<Navigation />

<div className="chat-area">
{conversation.map((msg, index) => (
<div
key={index}
className={`chat-bubble ${
User.payload.id === msg.By?._id ? "right-msg" : "left-msg"
}`}
>

<div className="d-flex">    
<img src={msg.By.image.url} alt="" height={"60px"} width={"50px"} style={{borderRadius:"50%", }}/>    

<h1 className="sender-name mx-4">{msg.By?.Username}</h1>

</div>
<p style={{marginLeft:"100px", borderRadius:"20px"}} className="bubble-text">{msg.Message}</p>
<p>{new Date(msg.created_At).toLocaleTimeString()}</p>
{User.payload.id === msg.By._id && (
<>
<button className="btn btn-outline-primary" onClick={() => {
setEditId(msg._id);         
setMessageInput(msg.Message); 
}}>
Edit
</button>
<button className="btn btn-outline-danger" onClick={() => DeleteChat(msg._id)}>Delete</button>
</>
)}
</div>
))}
</div>

<form onSubmit={SubmitForm} className="chat-form">
<input
className="chat-input"
type="text"
value={messageInput}
name="Message"
placeholder={editId ? "Edit your message..." : "Type your message..."}
onChange={(e) => setMessageInput(e.target.value)}
/>
<button type="submit" className="send-btn">
{editId ? "Update" : "Send"}
</button>
<button type="button" className="btnOne" onClick={() => setShow(true)} >GPT</button>
</form>

<ChatBotModal show={show} handleClose={handleClose} />

</div>
);
}

export default Chats;

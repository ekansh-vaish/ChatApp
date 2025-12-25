import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import "./UserList.css";
import Navigation from '../Navigation/Navigation';
import Chatimage from "../../assets/genai.webp";
function UserList() {
const [userlist,setUserList] = useState([]);
const navigate = useNavigate();
const User = JSON.parse(localStorage.getItem("User"));


async function fetchUsers() {
try{
const response = await axios.get("https://aichatapp-edji.onrender.com/userchat/userlist",{
withCredentials : true,
})
setUserList(response.data.userList);
}
catch(error)
{
console.log(error);

}
}

useEffect(() =>
{
fetchUsers();   
},[])

return (
<div>
<Navigation/>
{userlist.map((user) =>
(

<div className="btn" id='boxes' key={user._id} onClick={() => navigate(`/chats/${user._id}`)}>
<div className='innerdiv'>
<img src={user.image.url} alt={user.image}  height={"90px"} width={"80px"} style={{borderRadius:"50%"}}/>
</div>             
<div className='innerdiv'  > 
{user._id === User.payload.id  ? ( <h1>Me</h1> ) : (<> 
<h1>{user.Username}</h1>  
<p>{user.Email}</p> 
</> 
)}
</div> 



</div>
))}
<div className='box'> <img src={Chatimage} alt="Chat Illustration" />
<div className='content'>
<h1>Welcome to ChatApp</h1>
<p> Select a user from the list to start chatting. Your conversations will appear here once you begin. </p>
</div> 
</div>
</div>
)
}

export default UserList

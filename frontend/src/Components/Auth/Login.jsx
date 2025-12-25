import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
const [formData, setFormData] = useState({
Username: "",
Email: "",
Password: ""
});

const navigate = useNavigate();
function ChangeInp(e) {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
}

async function LoginForm(e) {
e.preventDefault();
try {
const response = await axios.post("https://aichatapp-edji.onrender.com/auth/login", formData,
{
withCredentials:true   
}
);
localStorage.setItem("User",JSON.stringify(response.data));
navigate("/users")
setFormData({
Username: "",
Email: "",
Password: ""
});
} catch (error) {
console.error("Error submitting form:", error);
}
}

return (
<div className="container mt-5 mb-5">
<div className="card shadow  p-4 mx-auto" style={{ width: "100%", maxWidth: "420px" }}>
<h3 className="text-center mb-4">Login</h3>
<form onSubmit={LoginForm} className="d-flex flex-column" >

<div className="form-group mb-3">
<label htmlFor="UserName">UserName :</label>
<input
type="text"
className="form-control"
placeholder="Enter Your name"
onChange={ChangeInp}
name="Username"
value={formData.Username}
required
/>
<small className="form-text text-muted">
We'll never share your Username with anyone else.
</small>
</div>

<div className="form-group mb-3">
<label htmlFor="exampleInputEmail1">Email address</label>
<input
type="email"
className="form-control"
id="exampleInputEmail1"
aria-describedby="emailHelp"
placeholder='Enter the Email here ...'
onChange={ChangeInp}
name="Email"
value={formData.Email}
required

/>
<small id="emailHelp" className="form-text text-muted">
We'll never share your email with anyone else.
</small>
</div>



<div className="form-group mb-3">
<label htmlFor="exampleInputPassword1">Password</label>
<input
type="password"
className="form-control"
placeholder='Enter the Password ...'
id="exampleInputPassword1"
onChange={ChangeInp}
name="Password"
value={formData.Password}
required

/>
</div>
<p>Have a Account?<a href='/register'>Create Your Account</a></p>
<button type="submit" className="btn btn-primary w-100">
Login
</button>
</form>
</div>
</div>
);
}

export default Login;

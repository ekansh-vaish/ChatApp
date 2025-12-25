import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {useNavigate} from "react-router-dom";
function Register() {
const [formData, setFormData] = useState({
Username: "",
Email: "",
Phone: "",
Password: "",
image : ""
});
const navigate = useNavigate();
function ChangeInp(e) {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
}
function ChangeFile(e) {
setFormData({...formData,image : e.target.files[0]})    
}

async function RegisterForm(e) {
e.preventDefault();
const userData = new FormData();
userData.append("Username", formData.Username);
userData.append("Email", formData.Email);
userData.append("Phone", formData.Phone);
userData.append("Password", formData.Password);
userData.append("image", formData.image);

try {
await axios.post("http://localhost:8080/auth/register", userData,
{
withCredentials:true ,
headers: {
"Content-Type": "multipart/form-data"
}   
}
);
navigate("/login");
setFormData({
Username: "",
Email: "",
Phone: "",
Password: "",
image : ''
});
} catch (error) {
console.error("Error submitting form:", error);
alert("Already Registered")
navigate("/login")
}
}

return (
<div className="container mt-5 mb-4">
<div className="card shadow p-4 w-100 mx-auto w-md-75 w-lg-50">
<h3 className="text-center mb-4">Create Your Account</h3>
<form onSubmit={RegisterForm} className="d-flex flex-column">
<div className="mb-3">
<label htmlFor="formFile" className="upload-box mx-auto d-flex justify-content-center align-items-center" style={{height:"140px",width:"140px",borderRadius:"50%",borderStyle:"solid"}} onClick={() => document.getElementById("hiddenFormImage").click()}>
{formData.image ? (
      <img src={URL.createObjectURL(formData.image)} alt="preview" style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "50%" }} />
    ) : (
      <span  style={{textAlign:'center'}}><p>Add Your Image</p></span>
    )}    
  
</label>
<input className="form-control" type="file" id="hiddenFormImage" onChange={ChangeFile} style={{display:'none'}} />
</div>
<div className="form-group mb-3">
<label htmlFor="UserName">UserName :</label>
<input
type="text"
className="form-control"
placeholder="Enter Your name"
onChange={ChangeInp}
name="Username"
value={formData.Username}
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
onChange={ChangeInp}
name="Email"
value={formData.Email}
/>
<small id="emailHelp" className="form-text text-muted">
We'll never share your email with anyone else.
</small>
</div>

<div className="form-group mb-3">
<label htmlFor="phone">Phone</label>
<input
type="number"
className="form-control"
id="exampleInputPhone"
aria-describedby="PhoneHelp"
onChange={ChangeInp}
name="Phone"
value={formData.Phone}
/>
<small id="phoneHelp" className="form-text text-muted">
We'll never share your phone with anyone else.
</small>
</div>

<div className="form-group mb-3">
<label htmlFor="exampleInputPassword1">Password</label>
<input
type="password"
className="form-control"
id="exampleInputPassword1"
onChange={ChangeInp}
name="Password"
value={formData.Password}
/>
</div>

<button type="submit" className="btn btn-primary w-100">
Submit
</button>
</form>
</div>
</div>
);
}

export default Register;

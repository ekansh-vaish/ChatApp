import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const User = JSON.parse(localStorage.getItem("User"));
  const userVal = User?.payload;   

  useEffect(() => {
    if (!User || !User.payload) {
      navigate("/login");
    }
  }, [User, navigate]);

  async function LogoutUser() {
    await axios.post(
      "https://aichatapp-edji.onrender.com/auth/logout",
      {},
      { withCredentials: true }
    );
    localStorage.removeItem("User"); 
    navigate("/login");
  }

  return (
    <div style={{
      height: "80px",
      backgroundColor: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      {/* Left side: User info */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {userVal && (
          <>
            <img
              src={userVal.image?.url}
              alt="profile"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #ddd"
              }}
            />
            <h2 style={{ margin: 0, fontSize: "1.2rem", color: "#333" }}>
              {userVal.Username}
            </h2>
          </>
        )}
      </div>
        
      {/* Right side: Logout button */}
      <button
        onClick={LogoutUser}
        style={{
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "25px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease"
        }}
        onMouseOver={e => e.target.style.backgroundColor = "#e60000"}
        onMouseOut={e => e.target.style.backgroundColor = "#ff4d4d"}
      >
        Logout
      </button>
    </div>
  );
}

export default Navigation;

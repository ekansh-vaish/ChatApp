// src/pages/NotFound.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // redirect after short delay
    const timer = setTimeout(() => {
      navigate("/users"); // 👈 tumhare users list route
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.wrap}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page not found</h2>
      <p style={styles.text}>Redirecting you to Users page...</p>
    </div>
  );
}

const styles = {
  wrap: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafb",
    color: "#333",
    textAlign: "center",
  },
  code: { fontSize: "64px", margin: 0, fontWeight: 800, color: "#ef4444" },
  title: { fontSize: "24px", margin: "8px 0" },
  text: { fontSize: "16px", color: "#555" },
};

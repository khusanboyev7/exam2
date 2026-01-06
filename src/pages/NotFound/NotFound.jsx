import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="container"
      style={{ padding: "80px 0", textAlign: "center" }}
    >
      <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>Sahifa topilmadi</p>

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "12px 24px",
          borderRadius: "100px",
          border: "none",
          background: "#1f6fff",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Bosh sahifaga qaytish
      </button>
    </div>
  );
}

export default NotFound;

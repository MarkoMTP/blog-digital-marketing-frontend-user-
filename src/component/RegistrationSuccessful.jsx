import { Link } from "react-router-dom";

function RegistrationSuccessful() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px 60px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#16a34a", marginBottom: "15px" }}>
          🎉 Registration Successful!
        </h2>
        <p style={{ color: "#4b5563", marginBottom: "25px" }}>
          Your account has been created successfully. You can now log in and
          start exploring.
        </p>
        <Link
          to="/login"
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#15803d")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#16a34a")}
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}

export default RegistrationSuccessful;

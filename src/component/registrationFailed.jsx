import { Link, useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error;
  const navigate = useNavigate();

  let errorMessage = "An unknown error occurred.";
  if (typeof error === "object") {
    errorMessage = error?.msg || error?.message || errorMessage;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  const handleBack = () => {
    navigate("/register", { replace: true });
  };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>⚠️ Oops!</h1>
      <p style={messageStyle}>{errorMessage}</p>
      <button onClick={handleBack} style={linkStyle}>
        ← Back to Register
      </button>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",

  textAlign: "center",
  color: "#fff", // white text for contrast
  padding: "0 1rem",
};

const headingStyle = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  color: "#ff6b6b", // soft red for attention
};

const messageStyle = {
  fontSize: "1.6rem",
  marginBottom: "2rem",
  color: "#f0f0f0",
};

const linkStyle = {
  fontSize: "1rem",
  color: "red",
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
};

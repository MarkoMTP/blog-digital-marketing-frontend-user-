import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/registerForm.css"; // Import CSS file
import api from "../api";

function RegisterForm() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/register/user", {
        userName,
        email,
        password,
        confirmPassword,
      });
      navigate("/successRegistration");
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  };

  const handleGoBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="RegisterContainer">
      <div className="regFormContainer">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit} className="form">
          {errorMsg && <p className="register-error">{errorMsg}</p>}

          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="button">
            Register
          </button>
        </form>

        <button className="go-back-btn" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;

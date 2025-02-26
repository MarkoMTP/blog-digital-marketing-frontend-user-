import { Link } from "react-router-dom";

function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.mainTitle}>Welcome to the Main Page!</h1>
      <Link to="login">
        <button style={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
}

const styles = {
  appContainer: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
  },
  mainTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "20px",
  },
  loginButton: {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default App;

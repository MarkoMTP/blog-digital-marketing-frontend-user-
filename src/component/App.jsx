import { Link } from "react-router-dom";

function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.blogTitle}>The Marketing Edit </h1>
      <p style={styles.subtitle}>
        A space for the newest updates and trends in the marketing industry.
      </p>

      <div style={styles.buttonContainer}>
        <Link to="login" style={styles.link}>
          <button style={styles.button}>Login</button>
        </Link>
        <Link to="register" style={styles.link}>
          <button style={styles.button}>Register</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    background: "linear-gradient(180deg, #f8f5f1, #f2eee8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "'Playfair Display', 'Inter', serif",
    padding: "2rem",
  },
  blogTitle: {
    fontSize: "3.2rem",
    fontWeight: "600",
    letterSpacing: "-0.5px",
    color: "#111",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#444",
    maxWidth: "600px",
    marginBottom: "3rem",
    fontFamily: "'Inter', sans-serif",
    lineHeight: "1.6",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.9rem 2.2rem",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    letterSpacing: "0.3px",
    transition: "all 0.3s ease",
  },
  link: {
    textDecoration: "none",
  },
};

// Simple hover animation
document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#333";
    e.target.style.transform = "translateY(-2px)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.style.backgroundColor = "#111";
    e.target.style.transform = "translateY(0)";
  }
});

export default App;

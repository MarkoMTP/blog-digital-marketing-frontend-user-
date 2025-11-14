import PropTypes from "prop-types";

function PostPreview({ title, content, author, onClick }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.content}>{content}</p>
      <p style={styles.author}>
        <span style={styles.published}>Published by</span>{" "}
        <span style={styles.authorName}>{author}</span>
      </p>
      <button onClick={onClick} style={styles.button}>
        Read More →
      </button>
    </div>
  );
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    padding: "3rem 2.5rem",
    borderRadius: "16px",
    border: "1px solid #eae6e1",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
    maxWidth: "720px",
    margin: "3rem auto",
    transition: "all 0.3s ease",
    cursor: "pointer",
    fontFamily: "'Inter', 'Playfair Display', serif",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 600,
    fontFamily: "'Playfair Display', serif",
    color: "#111",
    marginBottom: "1rem",
    letterSpacing: "-0.3px",
    lineHeight: "1.3",
  },
  content: {
    fontSize: "1.05rem",
    lineHeight: "1.9",
    color: "#444",
    marginBottom: "2rem",
    fontFamily: "'Inter', sans-serif",
    textAlign: "justify",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "3", // Limit to 3 lines
  },
  author: {
    fontSize: "0.95rem",
    color: "#777",
    marginBottom: "2rem",
    fontFamily: "'Inter', sans-serif",
    letterSpacing: "0.3px",
  },
  published: {
    color: "#999",
    fontStyle: "italic",
  },
  authorName: {
    fontWeight: 600,
    color: "#111",
  },
  button: {
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    padding: "0.9rem 1.8rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "0.3px",
    transition: "all 0.3s ease",
    fontFamily: "'Inter', sans-serif",
  },
};

// Add hover effects dynamically
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

export default PostPreview;

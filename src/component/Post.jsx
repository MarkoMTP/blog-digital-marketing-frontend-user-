import PropTypes from "prop-types";

function Post({ title, content, author }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.content}>{content}</p>
      <p style={styles.author}>
        Published by: <span style={styles.authorName}>{author}</span>
      </p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "2em",
    marginBottom: "10px",
    color: "#333",
  },
  content: {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "15px",
  },
  author: {
    fontSize: "1em",
    color: "#888",
  },
  authorName: {
    fontWeight: "bold",
    color: "#333",
  },
};

export default Post;

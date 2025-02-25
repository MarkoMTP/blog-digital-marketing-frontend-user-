import PropTypes from "prop-types";
import api from "../api";
import { useState } from "react";

function NewCommentForm({ id, setCommentCounter }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      const response = await api.post(
        `/posts/${id}/comments`,
        { content }, // Request body (comment content)
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setContent(""); // Clear the input after submitting
      setError(null);
      setCommentCounter((prevCounter) => prevCounter + 1);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add comment.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.submitButton}>
          Post Comment
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    resize: "none",
    marginBottom: "15px",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#45a049",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

NewCommentForm.propTypes = {
  setCommentCounter: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NewCommentForm;

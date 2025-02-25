import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import { useState } from "react";

function CommentDeletePage() {
  const { id, commentId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const deleteComment = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }
      await api.delete(`/posts/${id}/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Comment Deleted");
      navigate(`/posts/${id}`);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Delete Comment</h2>
      {error && <p style={styles.error}>{error}</p>}
      <p style={styles.warning}>
        Are you sure you want to delete this comment? This action cannot be
        undone.
      </p>

      <div style={styles.buttonContainer}>
        <button onClick={deleteComment} style={styles.deleteButton}>
          Delete
        </button>
        <button
          onClick={() => navigate(`/posts/${id}`)}
          style={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "50px auto",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  warning: {
    color: "#d9534f",
    fontSize: "16px",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  deleteButton: {
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  cancelButton: {
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CommentDeletePage;

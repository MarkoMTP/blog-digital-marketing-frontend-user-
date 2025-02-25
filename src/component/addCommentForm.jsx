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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          required
        />
        <button type="submit">Post Comment</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  setCommentCounter: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NewCommentForm;

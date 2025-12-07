import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import deleteComment from "../middleware/deleteComment";
import "../styles/CommentDeletionPage.css"; // Import the CSS file

function CommentDeletePage() {
  const { id, commentId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  return (
    <div className="commentDeletePage">
      <h2 className="heading">Delete Comment</h2>
      {error && <p className="error">{error}</p>}
      <p className="warning">
        Are you sure you want to delete this comment? This action cannot be
        undone.
      </p>

      <div className="button-container">
        <button
          onClick={() => deleteComment(id, commentId, setError, navigate)}
          className="delete-buttonCs"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/posts/${id}`)}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CommentDeletePage;

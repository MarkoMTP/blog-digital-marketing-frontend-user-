import PropTypes from "prop-types";
import { useState } from "react";
import addCommentHandler from "../middleware/addCommentHandler";
import "../styles/NewCommentForm.css"; // Import the CSS file

function NewCommentForm({ id, setCommentCounter }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="containerForm">
      <h2 className="heading">Add a Comment</h2>
      <form
        onSubmit={(e) =>
          addCommentHandler(
            e,
            id,
            content,
            setContent,
            setError,
            setCommentCounter
          )
        }
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          required
          className="textarea"
        />
        <button type="submit" className="submit-button">
          Post Comment
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  setCommentCounter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default NewCommentForm;

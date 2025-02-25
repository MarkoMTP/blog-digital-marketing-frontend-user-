import PropTypes from "prop-types";

function Comment({ content, author, createdAt }) {
  return (
    <div>
      <p>{content}</p>
      <p>{author}</p>
      <p>{createdAt}</p>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([
    PropTypes.instanceOf(Date), // If it's a Date object
    PropTypes.string, // If it's an ISO string from an API
  ]).isRequired,
};

export default Comment;

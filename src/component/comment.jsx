import PropTypes from "prop-types";

function Comment({ content, author }) {
  return (
    <div>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Comment;

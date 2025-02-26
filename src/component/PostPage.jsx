import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "./comment";
import NewCommentForm from "./addCommentForm";
import fetchPost from "../middleware/fetchPost";
import "../styles/PostPage.css"; // Import the CSS file

function PostPage() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [commentCounter, setCommentCounter] = useState(0);

  useEffect(() => {
    fetchPost(id, setPost, setError, setLoading);
  }, [id, commentCounter]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="container">
      <h1 className="title">{post.title}</h1>
      <p className="content">{post.content}</p>

      <NewCommentForm id={post.id} setCommentCounter={setCommentCounter} />

      <h2 className="commentsTitle">Comments:</h2>
      {post.comments && post.comments.length > 0 ? (
        post.comments.map((comment) => (
          <Comment
            key={comment.id}
            commentId={comment.id}
            content={comment.content}
            author={comment.author.userName}
            createdAt={comment.createdAt}
          />
        ))
      ) : (
        <p className="noComments">No comments yet.</p>
      )}

      <button onClick={() => navigate("/posts")} className="goBackButton">
        Go back
      </button>
    </div>
  );
}

export default PostPage;

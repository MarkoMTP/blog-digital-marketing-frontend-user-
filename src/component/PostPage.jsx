import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "./comment";
import NewCommentForm from "./addCommentForm";
import fetchPost from "../middleware/fetchPost";
import "../styles/PostPage.css";

function PostPage() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentCounter, setCommentCounter] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPost(id, setPost, setError, setLoading);
  }, [id, commentCounter]);

  if (loading) return <p className="loading">Loading post...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!post) return <p className="error">Post not found</p>;

  return (
    <div className="post-page">
      {/* Post Content Section */}
      <article className="post-content">
        <h1 className="title">{post.title}</h1>
        <p className="content">{post.content}</p>
        <button onClick={() => navigate("/posts")} className="go-back-btn">
          ← Back to Posts
        </button>
      </article>

      {/* Comments + Form Section */}
      <section className="comments-section">
        <div className="comments-layout">
          {/* Left side - Add comment */}
          <div className="add-comment">
            <h3 className="section-heading">Leave a Comment</h3>
            <NewCommentForm
              id={post.id}
              setCommentCounter={setCommentCounter}
            />
          </div>

          {/* Right side - Existing comments */}
          <div className="comments-list-container">
            <h3 className="section-heading">Comments</h3>
            {post.comments && post.comments.length > 0 ? (
              <div className="comments-list">
                {post.comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    commentId={comment.id}
                    content={comment.content}
                    author={comment.author.userName}
                    createdAt={comment.createdAt}
                  />
                ))}
              </div>
            ) : (
              <p className="no-comments">No comments yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostPage;

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Comment from "./comment";
import NewCommentForm from "./addCommentForm";
import fetchPost from "../middleware/fetchPost";
import "../styles/PostPage.css";
import "../styles/NewCommentForm.css";

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

  if (loading) return <p className="loadingText">Loading post...</p>;
  if (error) return <p className="errorText">Error: {error}</p>;
  if (!post) return <p className="errorText">Post not found</p>;

  return (
    <div className="postPageContainer">
      {/* POST CONTENT */}
      <div className="postContentContainer">
        <h1 className="postTitle">{post.title}</h1>
        <p className="postText">{post.content}</p>

        <button className="backButton" onClick={() => navigate("/posts")}>
          ← Back to Posts
        </button>
      </div>

      {/* COMMENTS SECTION */}
      <div className="commentsContainer">
        <h2 className="commentsTitle">Comments</h2>

        <NewCommentForm id={post.id} setCommentCounter={setCommentCounter} />

        {/* Comment List */}
        <div className="commentsList">
          {post.comments?.length > 0 ? (
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
            <p className="noCommentsText">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostPage;

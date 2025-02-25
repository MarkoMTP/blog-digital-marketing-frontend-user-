import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import { useEffect, useState } from "react";
import Comment from "./comment";
import NewCommentForm from "./addCommentForm";

function PostPage() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [commentCounter, setCommentCounter] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await api.get(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        setPost(response.data); // Make sure to use response.data
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, commentCounter]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>Title: {post.title}</h1>
      <p>Content: {post.content}</p>

      <NewCommentForm id={post.id} setCommentCounter={setCommentCounter} />

      <h1>Comments:</h1>
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
        <p>No comments yet.</p>
      )}

      <button onClick={() => navigate("/posts")}>Go back</button>
    </div>
  );
}

export default PostPage;

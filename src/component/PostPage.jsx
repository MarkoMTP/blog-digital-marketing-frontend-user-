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
    <div style={styles.container}>
      <h1 style={styles.title}>{post.title}</h1>
      <p style={styles.content}>{post.content}</p>

      <NewCommentForm id={post.id} setCommentCounter={setCommentCounter} />

      <h2 style={styles.commentsTitle}>Comments:</h2>
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
        <p style={styles.noComments}>No comments yet.</p>
      )}

      <button onClick={() => navigate("/posts")} style={styles.goBackButton}>
        Go back
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  content: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  commentsTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  noComments: {
    fontStyle: "italic",
    color: "#777",
  },
  goBackButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
};

export default PostPage;

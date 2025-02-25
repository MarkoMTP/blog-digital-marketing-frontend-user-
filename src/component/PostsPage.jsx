import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import PostPreview from "./PostPreview";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (id) => {
    await navigate(`/posts/${id}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token"); // Get JWT token
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await api.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token
          },
        });

        setPosts(response.data); // Make sure to use response.data
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p style={styles.loading}>Loading posts...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarHeading}>Digital Marketing Blog</h2>
        <p style={styles.sidebarText}>
          Discover expert insights, strategies, and trends in the world of
          digital marketing. Your go-to source for online marketing success!
        </p>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.heading}>Blog Posts</h1>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            author={post.author.userName}
            onClick={() => handleClick(post.id)}
            style={styles.postPreview}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    maxWidth: "100%",
    background: "#f5f5f5", // Light grey background to blend with content
    flexWrap: "wrap",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#4A90E2", // Cool blue background
    padding: "30px",
    borderRadius: "15px",
    color: "white",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginRight: "20px",
  },
  sidebarHeading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  sidebarText: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#D9E6F6",
  },
  mainContent: {
    width: "65%",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
  heading: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#333",
  },
  postPreview: {
    marginBottom: "30px",
    padding: "25px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
  },
  postPreviewHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
  loading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default PostsPage;

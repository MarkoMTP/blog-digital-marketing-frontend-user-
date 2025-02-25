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

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          title={post.title}
          author={post.author.userName}
          onClick={() => handleClick(post.id)}
        />
      ))}
    </div>
  );
}

export default PostsPage;

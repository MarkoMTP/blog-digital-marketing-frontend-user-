import { useEffect, useState } from "react";
import api from "../api";
import Post from "./Post";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        console.log("API Response:", response.data);
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
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          author={post.author.userName}
        />
      ))}
    </div>
  );
}

export default PostsPage;

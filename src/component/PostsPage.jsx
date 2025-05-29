import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostPreview from "./PostPreview";
import "../styles/PostsPage.css";
import fetchPosts from "../middleware/fetchposts";
import logout from "../middleware/logout";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (id) => {
    await navigate(`/posts/${id}`);
  };

  useEffect(() => {
    fetchPosts(setPosts, setError, setLoading);
  }, []);

  if (loading) return <p className="loading">Loading posts...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="page-container">
      <div className="sidebar">
        <h1 className="title">🚀 Digital Marketing Blog</h1>
        <p className="subtitle">
          Stay ahead with the latest trends, strategies, and tips!
        </p>
        <button onClick={logout} className="logoutButton">
          Logout
        </button>{" "}
        {/* Logout Button */}
      </div>

      <div className="posts-container">
        <h2 className="heading">Latest Posts</h2>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            author={post.author.userName}
            onClick={() => handleClick(post.id)}
            className="post-preview"
          />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;

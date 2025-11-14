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

  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="posts-page">
      <aside className="sidebar">
        <h1 className="site-title">The Marketing Edit</h1>
        <p className="site-subtitle">
          Stay ahead with the latest strategies, tools, and industry insights.
        </p>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </aside>

      <main className="content">
        <h2 className="section-title">Latest Articles</h2>
        {posts.length === 0 ? (
          <p className="no-posts">No posts available yet.</p>
        ) : (
          <div className="posts-grid">
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
        )}
      </main>
    </div>
  );
}

export default PostsPage;

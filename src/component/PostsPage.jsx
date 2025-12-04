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

  useEffect(() => {
    fetchPosts(setPosts, setError, setLoading);
  }, []);

  const handleClick = (id) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="posts-page">
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">
        <div>
          <h1 className="site-title">The Marketing Blog</h1>
          <p className="site-subtitle">
            Articles, breakdowns and ideas on marketing.
          </p>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="posts-content">
        <h2 className="section-title">Latest Articles</h2>

        {loading ? (
          <p className="state-msg">Loading…</p>
        ) : error ? (
          <p className="state-msg error">{error}</p>
        ) : posts.length === 0 ? (
          <p className="state-msg">No posts yet.</p>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <PostPreview
                key={post.id}
                title={post.title}
                author={post.author.userName}
                onClick={() => handleClick(post.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default PostsPage;

import api from "../api";

const deleteComment = async (id, commentId, setError, navigate) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }
    await api.delete(`/posts/${id}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Comment Deleted");
    navigate(`/posts/${id}`);
  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong");
  }
};

export default deleteComment;

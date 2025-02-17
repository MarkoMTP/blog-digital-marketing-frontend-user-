import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();

  // Extract the error message from the location state
  const error = location.state?.error;

  // Check if the error is an object and extract a message
  let errorMessage = "";

  if (typeof error === "object") {
    // If the error is an object, you can display its message or other relevant information
    errorMessage = error.msg || "An unknown error occurred.";
  } else {
    // If it's a string, just display it
    errorMessage = error || "An unknown error occurred.";
  }

  return (
    <>
      {" "}
      <h2>{errorMessage}</h2>
      <Link to="/register">Go back</Link>
    </>
  );
};

export default ErrorPage;

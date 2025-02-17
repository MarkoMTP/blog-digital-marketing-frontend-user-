import { Link } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <>
      <h1>Hello Everybody this is the main page</h1>
      <Link to="login">Login</Link>
    </>
  );
}

export default App;

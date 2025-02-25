import App from "./App";
import LoginForm from "./loginForm";
import Post from "./Post";
import PostPage from "./PostPage";
import PostsPage from "./PostsPage";
import RegisterForm from "./RegisterForm";
import ErrorPage from "./registrationFailed";
import RegisterSuccess from "./RegistrationSuccessful";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/errorRegistration",
    element: <ErrorPage />,
  },
  {
    path: "/successRegistration",
    element: <RegisterSuccess />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/posts/:id",
    element: <PostPage />,
  },
];

export default routes;

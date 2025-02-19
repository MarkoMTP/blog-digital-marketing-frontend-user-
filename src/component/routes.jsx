import App from "./App";
import LoginForm from "./loginForm";
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
];

export default routes;

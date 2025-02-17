import App from "./App";
import LoginForm from "./loginForm";
import RegisterForm from "./RegisterForm";
import ErrorPage from "./registrationFailed";

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
];

export default routes;

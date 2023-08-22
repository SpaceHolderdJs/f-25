import { createBrowserRouter } from "react-router-dom";
import { Auth } from "./components/static/Auth";
import { Landing } from "./components/static/Landing";
import { Dashboard } from "./components/static/Dashboard";
import { PrivateRoute } from "./components/shared/PrivateRoute";
import { Settings } from "./components/static/Settings";
import { UsersList } from "./components/users/UsersList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute fallback="/login">
      <Dashboard />
      // </PrivateRoute>
    ),
    children: [
      { path: "users", element: <UsersList /> },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Details from "../Pages/Details";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteForSignIn from "./PrivateRouteForSignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/login",
        element: (
          <PrivateRouteForSignIn>
            <Login></Login>
          </PrivateRouteForSignIn>
        ),
      },
      {
        path: "/signup",
        element: (
          <PrivateRouteForSignIn>
            <SignUp></SignUp>
          </PrivateRouteForSignIn>
        ),
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
]);
export default router;

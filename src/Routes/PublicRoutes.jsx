import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Services from "../Pages/Services";

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
    ],
  },
]);
export default router;

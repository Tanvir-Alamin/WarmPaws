import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
export default router;

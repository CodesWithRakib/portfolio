import { createBrowserRouter } from "react-router";
import ProjectDetails from "../pages/ProjectDetails";
import Root from "../layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
]);

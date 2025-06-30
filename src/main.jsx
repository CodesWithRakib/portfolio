import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./layouts/Root";
import Aos from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";

Aos.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

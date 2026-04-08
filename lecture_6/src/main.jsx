import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Summer } from "./Summer";
// import { Winter } from "./Winter";
// import { Autumn } from "./Autumn";
// import { Spring } from "./Spring";
// import { Descriptions } from "./Descriptions";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Descriptions />,
//     children: [
//       { path: "/spring", element: <Spring /> },
//       { path: "/summer", element: <Summer /> },
//       { path: "/autumn", element: <Autumn /> },
//       { path: "/winter", element: <Winter /> },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
);

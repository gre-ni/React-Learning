import { Academies } from "./Academies";
import { Introduction } from "./Introduction";
import { ReactAcademy } from "./ReactAcademy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Introduction /> },
  { path: "/akademie", element: <Academies /> },
  { path: "/react-akademie", element: <ReactAcademy /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

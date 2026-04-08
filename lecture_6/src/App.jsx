import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeeContext } from "./EmployeeContext";
import { EmployeeList } from "./EmployeeList";
import { EmployeeDetail } from "./EmployeeDetail";
import employees from "./employees.json";

const router = createBrowserRouter([
  { path: "/", element: <EmployeeList /> },
  { path: "/:id", element: <EmployeeDetail /> },
]);

export const App = () => {
  return (
    <>
      <EmployeeContext value={employees}>
        <RouterProvider router={router} />
      </EmployeeContext>
    </>
  );
};

export default App;

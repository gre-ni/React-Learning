import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentList } from "./StudentList";
import { StudentDetail } from "./StudentDetail";
import { StudentEditForm } from "./StudentEditForm";
import { StudentCreateForm } from "./StudentCreateForm";

const router = createBrowserRouter([
    { path: "/", element: <StudentList /> },
    { path: "/students/:id", element: <StudentDetail /> },
    { path: "/students/:id/edit", element: <StudentEditForm /> },
    { path: "/students/create", element: <StudentCreateForm /> },
]);

function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;

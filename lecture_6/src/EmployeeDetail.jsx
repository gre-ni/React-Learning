import { useParams } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import { Link } from "react-router-dom";

export const EmployeeDetail = () => {
  const { id } = useParams();
  const employees = useContext(EmployeeContext);

  console.log(id);

  return (
    <div>
      <h3>
        <Link to={`/`}>Back to list</Link>
      </h3>
      <table>
        <tbody>
          {employees
            .filter((employee) => employee.id.toString() === id)
            .map((employee) => (
              <tr key={employee.id}>
                <td>id: {employee.id},</td>
                <td>name: {employee.firstName},</td>
                <td>surname: {employee.lastName},</td>
                <td>age: {employee.age},</td>
                <td>department: {employee.departmentId},</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

import employees from "./employees.json";
import { useState, useEffect } from "react";

export const Employees = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const keys = Object.keys(employees[0]);

  useEffect(() => {
    setEmployeeList(employees);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {keys.map((key) => (
            <td>{key}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {employeeList.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.age}</td>
            <td>{employee.departmentId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

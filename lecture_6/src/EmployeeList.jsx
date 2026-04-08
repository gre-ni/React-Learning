import { Link } from "react-router-dom";
import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
// import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const employees = useContext(EmployeeContext);
  const keys = Object.keys(employees[0]);

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
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>
              <Link to={`/${employee.id}`}>{employee.id}</Link>
            </td>
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

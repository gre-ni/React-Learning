import { useEffect, useState } from "react";

export const StudentList = () => {
    const [studentInfo, setStudentInfo] = useState([]);

    useEffect(
        () => {
            const loadStudents = async () => {
                // Define here
                // setStudentInfo([]); // Clear between fetching, for load state
                const response = await fetch("http://localhost:8080/students");
                setStudentInfo(await response.json());
            };
            loadStudents(); // Call here
        },
        [], // On mount
    );

    return (
        <div id="student-list">
            <h1>List of students</h1>
            <table class="table table-light table-striped table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>gender</th>
                        <th>house</th>
                        <th>year</th>
                    </tr>
                </thead>
                <tbody>
                    {studentInfo.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td>{student.house}</td>
                            <td>{student.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

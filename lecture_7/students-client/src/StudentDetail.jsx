import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const StudentDetail = () => {
    const { id: rawId } = useParams(); // Params returns string
    const id = Number(rawId); // Convert to number just in case I want to manipulate in the future

    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        const loadStudent = async (id) => {
            const result = await fetch(`http://localhost:8080/students/${id}`);
            setStudentInfo(await result.json());
        };
        loadStudent(id);
    }, [id]); // It should react to url param changing

    // console.log(studentInfo);

    return (
        <div id="student-detail">
            <h1>
                Detail of {studentInfo.firstName} {studentInfo.lastName}
            </h1>
            <table className="table table-light table-striped table-bordered text-start">
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>{studentInfo.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>{studentInfo.lastName}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{studentInfo.gender}</td>
                    </tr>
                    <tr>
                        <td>House:</td>
                        <td>{studentInfo.house}</td>
                    </tr>
                    <tr>
                        <td>Year:</td>
                        <td>{studentInfo.year}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

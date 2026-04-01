import { StudentDetail } from './StudentDetail.jsx'

export const Student = ({data}) => {

    const onStudentClick = (name) => {
        console.log(name);
    }

    if (data.length < 1) { 
        return <p>No students.</p>
    } 
    else {
        return data.map(student => (<StudentDetail name={student.jmeno} surname={student.prijmeni} onClickFunction={onStudentClick}/>))
    }
}
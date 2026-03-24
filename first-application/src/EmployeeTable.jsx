import { lide } from "./lide"

export const EmployeeTable = () => {
    return <table>
        <tbody>
        {lide.map(clovek => 
            <tr>
                <td>{clovek.jmeno}</td>
                <td>{clovek.prijmeni}</td>
            </tr>)}
        </tbody>
    </table>
}
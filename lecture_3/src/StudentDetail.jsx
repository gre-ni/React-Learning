export const StudentDetail = ({name, surname, onClickFunction}) => {
    return <button onClick={() => onClickFunction(name)}>{name} {surname}</button>
}
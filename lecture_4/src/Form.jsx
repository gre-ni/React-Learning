import { useState } from "react";

export const Form = () => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState(false);
    
    const onSubmit = () => {
        console.log("submitted:", name, surname);
    }

    return (
        <>
            Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            Surname: <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)}/>
            Age: <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
            Send email: <input type="checkbox" onChange={(e) => setEmail(e.target.checked)}/>           
            <button onClick={onSubmit}>Submit</button>
            <p>Name: {name}, {surname}</p>
            <p>Age: {age}</p>
            {(email === true) ? <p>Wants an email</p> : <p>Doesn't want an email</p>}
        </>
    )
}
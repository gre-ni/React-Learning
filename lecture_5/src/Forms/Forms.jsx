import { useState, useEffect } from "react";


export const Forms = () => {

    const [firstName, setFirstName] = useState("");

    useEffect(
        () => {
            console.log("Neco se zmenilo");
            return () => {console.log("Probiha unmount");};
        },
        [firstName]
    );

    return <>
        <h1>Form</h1>
        <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)}></input>
        <p>{firstName}</p>
    </>
}
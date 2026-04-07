import { useState } from "react";

export const AnimalItem = ({name}) => {

    const [counter, setCounter] = useState(0);

    return <li onClick={() => setCounter(counter + 1)}>
        <h3>{name}: </h3>
        <p>{counter}</p>
    </li>

}
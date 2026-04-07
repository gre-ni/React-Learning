import { useState } from "react";

export const Spread = () => {

    const [listOfNumbers, setListOfNumbers] = useState([1, 2, 3]);

    return (<>
        <ul>
            {listOfNumbers.map(number => <li key={number}>{number}</li>)}
        </ul>
        <button onClick={() => setListOfNumbers([...listOfNumbers, 4])}>Add to list</button>
        </>
    )
}
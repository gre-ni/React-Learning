import { useState } from "react";

export const IncreaseByOne = () => {

    const [count, setCount] = useState(0);

    const increaseByOne = () => {
        setCount(count + 1);
    }

    return <div className="counter">
        <p>Number: {count}</p>
        <button onClick={increaseByOne}>Add +1</button>
        {(count % 2 !== 0) && <p>Odd number</p>}
    </div>
}
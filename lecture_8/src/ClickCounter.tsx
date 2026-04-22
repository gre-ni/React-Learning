import { Button } from "./Button.tsx";
import { useState } from "react";

export const ClickCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = (): void => {
        setCount(count + 1);
    };

    return (
        <>
            <Button label="Clicker" onClick={handleClick} />
            <p>Number of clicks: {count}</p>
        </>
    );
};

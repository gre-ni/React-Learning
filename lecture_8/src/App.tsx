import { Button } from "./Button.tsx";
import "./App.css";
import { ClickCounter } from "./ClickCounter.tsx";
import { GreetingUser } from "./GreetingUser.tsx";
import { DogImage } from "./DogImage.tsx";

function App() {
    // It is good practice to set up handler function, rather than pass in raw func as parameter
    // I'm defining function at the level of interaction and passing it in and it has to match the type that props expects
    const handleClick = (): void => {
        console.log("Button is clicked");
    };

    return (
        <>
            <Button label="Tlacitko" onClick={handleClick} />
            <ClickCounter />
            <GreetingUser />
            <DogImage />
        </>
    );
}

export default App;

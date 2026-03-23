export const Button = () => {
    const printToConsole = () => {
        console.log("I was clicked");
    }
    return <button onClick={printToConsole}>Click Me!</button>;
};
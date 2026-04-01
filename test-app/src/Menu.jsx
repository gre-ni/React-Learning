export const Menu = () => {

    const heading = 'Menu';
    const menuItems = ['About', 'Contact', 'Pricing'];
    const printToConsole = () => console.log(heading);

    return <div id="menu">
        <h1>{heading}</h1>
        <ul>
            {menuItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        <button onClick={printToConsole}>Submit</button>
    </div>
}
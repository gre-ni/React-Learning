export const List = () => {
    const menu = ["Úvod", "O nás", "Článek", "Kontakt"];

    return <ul className="Menu">
        {menu.map(item => {
            return <li>{item.toUpperCase()}</li>}
        )}
    </ul>;
};
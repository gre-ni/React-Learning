export const Numbers = () => {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
        const newNumber = (i * 3) - 1;
        numbers.push(newNumber);
    }

    const lessThanSix = numbers.filter(n => n < 6);

    return <ul>
        {lessThanSix.map((number, index) => <li key={index}>{number}</li>)}
    </ul>
}
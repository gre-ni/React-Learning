export const List = () => {
    const numbers = [];


    // if !numbers.length {
    //     return null;
    // }

    // return numbers.length ? <ul>{numbers.map(number => <li>{number}</li>)}</ul> : null

    return numbers && <ul>{numbers.map(number => <li>{number}</li>)}</ul>

}
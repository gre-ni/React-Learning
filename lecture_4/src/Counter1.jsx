export const Counter1 = () => {
    const index = 1;

    const addPlusOne = (index) => {
        console.log(index);
        index = index + 1;
    }

    return (
        <>
            value: {index}
            <button onClick={addPlusOne}>Add +1</button>
        </>
    )

}
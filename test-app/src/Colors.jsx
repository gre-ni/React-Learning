export const Colors = () => {
    const colors = ['yellow', 'purple', 'red', 'green', 'blue'];
    const newColors = colors.map((color_value, index) => ({ 
        id: index,
        color: color_value
    }))

    console.log(newColors)

    return <ul>
        {newColors.map(color => <li key={color.id}>{color.color}</li>)}
    </ul>
}
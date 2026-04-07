import { useState } from "react";

export const Animals = () => {

    const [listAnimals, setListAnimals] = useState([{"id": 1, "animal": "cat"}]);

    const addAnimal = (name) => {
        setListAnimals([...listAnimals,{
            id: Math.floor(Math.random() * 999), animal: name}])
    }

    return <div>
        <ul>
            {listAnimals.map((animal) => (<li key={animal.id}>{animal.animal}</li>))}</ul>
            <p>Add:</p>
            <button onClick={() => addAnimal("Cat")}>Cat</button>
            <button onClick={() => addAnimal("Dog")}>Dog</button>
            <button onClick={() => addAnimal("Rabbit")}>Rabbit</button>
            {(listAnimals.length % 2 === 0) ? <p>Even Length</p> : <p>Odd Length</p>}                        
    </div>

}
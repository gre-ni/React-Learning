import { useState } from "react";
import { AnimalItem } from "./AnimalItem";

export const AnimalListB = () => {

    const [allAnimals, setAllAnimals] = useState([
        {"id": 1, "type": "Cat", "visible": true}, 
        {"id": 2, "type": "Dog", "visible": true}, 
        {"id": 3, "type": "Rabbit", "visible": true}
    ])

    // Clicking button adds option to the list
    // Button can only be clicked once, then disappears
    // Each item is clickable and displays the amount it's been clicked on

    return <>
        <ul>
            {allAnimals.map(animal => <AnimalItem key={animal.id} name={animal.type} />)}
        </ul>
        
        {/* Button should only render if animal.visible is true. 
        Clicking the button adds one AnimalItem, then changes state to false, 
        need to be a copy of the object to rerender. */}

        {allAnimals.map(animal => animal.visible && <button 
            key={animal.id}
            onClick={() => setAllAnimals(
                // TODO: First append animal object to the array, id + 1, animal.type -> this type should be set to invisible right after
                allAnimals.map( listAnimal =>
                    listAnimal.type === animal.type ? {...listAnimal, visible: false} : listAnimal
                )
            )}>{animal.type}</button>)} 
    </>
}
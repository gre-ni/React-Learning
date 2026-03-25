import { lide } from './lide.js'

export const People = () => {
    const people = lide;
    const youngerThan = people.filter(person => person.vek > 30);

    return <ul>
        {youngerThan
        .map(person => <li key={person.id}>{`${person.jmeno} ${person.prijmeni} vek: ${person.vek}`}</li>)}
    </ul>
}

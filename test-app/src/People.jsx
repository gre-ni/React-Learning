import { User } from './User.jsx'

export const People = ({table}) => {

    const youngerThan = table.filter(person => person.vek < 30);

    return <ul>{youngerThan.map(person => <li><User user={person}/></li>)}</ul>
}

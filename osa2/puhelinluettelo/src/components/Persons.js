const Persons = ({ persons, newFilter }) => {
    let lowerFilter = newFilter.toLowerCase();
    return (
        persons.filter(person => person.name.toLowerCase().includes(lowerFilter)).map(person =>
            <p key={person.name}>  {person.name} {person.number}</p>)
    )
    }
  
export default Persons

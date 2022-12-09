const Persons = ({ persons, newFilter }) => {
    console.log(persons)
    let lowerFilter = newFilter.toLowerCase();
    console.log(lowerFilter)
    return (
        persons.filter(person => person.name.toLowerCase().includes(lowerFilter)).map(person =>
            <p key={person.name}>  {person.name} {person.number}</p>)
    )
    }
  
export default Persons

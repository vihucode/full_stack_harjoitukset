import DeleteButtons from "./DeleteButtons";

const Persons = ({ persons, newFilter, errorMessage, setErrorMessage }) => {
    console.log(persons)
    let lowerFilter = newFilter.toLowerCase();
    console.log(lowerFilter)
    return (
        persons.filter(person => person.name.toLowerCase().includes(lowerFilter)).map((person) =>
            <p key={person.id}>  {person.name} {person.number}
            <button onClick = {
                () => { DeleteButtons(setErrorMessage, person.id, person.name) }
            }>Delete</button></p>)
    )
    }
  
export default Persons

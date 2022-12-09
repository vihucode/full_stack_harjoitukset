import { useState } from 'react'
import Persons from './components/Persons'

import Filter from './components/Filter'
import AddForm from './components/AddForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addName = (event) => {
    if (persons.filter(item => item.name.includes(newName)).length === 0) {
      event.preventDefault();
      const nameObject = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewNumber('');
    } else {
      event.preventDefault();
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  console.log(persons)
  return (
    <div>
      <h2>Phonebook</h2>
      < Filter handleFilterChange={handleFilterChange} newFilter={newFilter}/>
      <h2>add a new</h2>
      < AddForm 
          onSubmit={addName}
          newName={newName}
          newNumber={newNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      < Persons persons={persons} newFilter={newFilter}/>
    </div>
  )

}

export default App

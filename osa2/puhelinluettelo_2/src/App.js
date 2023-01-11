import { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import personService from './services/personsdata'
import Alert from './components/Alert'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

      axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
      
      setErrorMessage(
        `Added ${nameObject.name} `
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)


    } else {
      event.preventDefault();
      if(window.confirm('Delete ?')){
      }
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
      <Alert message={errorMessage} />
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
      < Persons 
       persons={persons}
       newFilter={newFilter}
       setErrorMessage={setErrorMessage}
       />
    </div>
  )

}

export default App

import { useState, useEffect } from 'react'
import axios from 'axios'

import ShowCountry from './components/ShowCountry'
import Search from './components/Search'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [newSearch, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  const newList = Filter(countries, newSearch);

  return(
    <div>
      < Search handleSearchChange={handleSearchChange} newSearch={newSearch}/>
      < ShowCountry
       newList={newList}
       newSearch={newSearch} 
       countries={countries} />    
    </div>
  )

}

export default App
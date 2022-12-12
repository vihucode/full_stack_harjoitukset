import { useState, useEffect } from 'react'
import axios from 'axios'

import ShowCountry from './components/ShowCountry'
import Search from './components/Search'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [weather, setWeather] = useState([]) 
  const [newSearch, setSearch] = useState('')

  const api_key = process.env.REACT_APP_API_KEY

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

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=9392925bba9bc605d88e26dc93d83c32')
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }, [])
  console.log('render', weather.length, 'weathers')
  

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
       countries={countries} 
       handleSearchChange={handleSearchChange}
       setSearch={setSearch} />
    </div>
  )

}

export default App
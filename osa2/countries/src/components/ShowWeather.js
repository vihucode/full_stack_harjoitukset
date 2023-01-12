import { useState, useEffect } from 'react'
import axios from 'axios'

const ShowWeather = (props) => {

    const [weather, setWeather] = useState({}); 
    const [temp, setTemp] = useState('Loading...');
    const [icon, setIcon] = useState('');
    const [wind, setWind] = useState('');

    const lat = props.country.latlng[0]
    const lon = props.country.latlng[1]

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9392925bba9bc605d88e26dc93d83c32`)
          .then(response => {
            setWeather(response.data);
            if (response.data.main && response.data.main.temp) {
                setTemp(Number((response.data.main.temp - 273.15).toFixed(2)));
                setWind(response.data.wind.speed);
            }
            if (response.data.weather[0].icon){
              setIcon(response.data.weather[0].icon);
            }
          })
          .catch(error => {
            console.log(error);
            setTemp("Error occured");
          })
    }, [])

    return (
      <div>
        <p>temperature {temp} Celcius</p> 
        < img src= {'http://openweathermap.org/img/wn/' + icon + '@2x.png'} />
        <p> wind {wind} m/s </p> 
      </div>

    )
}

export default ShowWeather

import Languages from './Languages'

const CountryInfo = (props) => {
    return(
        props.countries.filter(country => country.name.common.toLowerCase().includes(props.lower)).map(country =>
            <div key={country.name}>
            <h1>{country.name.common}</h1>
            capital {country.capital}<br />
            area {country.area}<br />
            <h3>Languages:</h3>
            <Languages country={country}/> <br />
            <img src= {country.flags['png']} style={{width: 200, height: 150}}/>
            <h2>Weather in {country.capital}</h2>
            </div>)
    )
} 

export default CountryInfo
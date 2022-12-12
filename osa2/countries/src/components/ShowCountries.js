const ShowCountries = (props) => {
    return (
        props.countries.filter(country => country.name.common.toLowerCase().includes(props.lower)).map(country =>
         <p key={country.name.common}>{country.name.common} </p> )
    )
}

export default ShowCountries
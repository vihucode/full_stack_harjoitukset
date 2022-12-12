const Languages = (props) => {
    return (
        Object.values(props.country.languages).map(language => 
            <li key={language} > {language} </li>)
    )
}

export default Languages
import CountryInfo from './CountryInfo';
import ShowCountries from './ShowCountries';

const ShowCountry = (props) => {

    const lower = props.newSearch.toLowerCase();
    if (Object.keys(props.newList).length > 10){
        return (
            <p> Too many matches, specify another filter</p>
        )
    }else if (Object.keys(props.newList).length == 1){
        return (
            < CountryInfo
            countries={props.countries} 
            lower={lower}/>
        )
    }else{
        return(
            < ShowCountries countries={props.countries} lower={lower}/>
        )
    }
}
  
export default ShowCountry
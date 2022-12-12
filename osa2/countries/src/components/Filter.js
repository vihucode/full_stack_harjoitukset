const Filter = (countries, newSearch) => {
    let lower = newSearch.toLowerCase();
    const list = [];
    countries.filter(country => country.name.common.toLowerCase().includes(lower)).map(country => 
         list.push(country.name.common))
    return list;
}

export default Filter
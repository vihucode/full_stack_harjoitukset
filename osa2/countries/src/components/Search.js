const Search = (props) => {
    return (
        <form>
            <div>
            find countries: <input 
            value={props.newSearch}
            onChange={props.handleSearchChange}
            />
            </div>
      </form>
    )

 }

 export default Search
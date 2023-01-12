const Search = (props) => {
    console.log("koira")
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
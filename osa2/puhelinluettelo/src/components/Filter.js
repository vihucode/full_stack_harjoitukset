const Filter = ({handleFilterChange}, {newFilter}) => {
    return (
        <form>
            <div>
            filter shown with: <input 
            value={newFilter}
            onChange={handleFilterChange}
            />
            </div>
      </form>
    )

 }

 export default Filter
import axios from 'axios'

const DeleteButtons = (setMessage, id, person) => {
    if (window.confirm('Delete ' + person + '?')){
        axios.delete('http://localhost:3001/persons/' + id )
        setMessage(
            `Deleted ${person} `
          )
          setTimeout(() => {
            setMessage(null)
            window.location.reload(false);
          }, 4000)
    }
    
}

export default DeleteButtons
const Header = ({name}) => <div><h2>{name}</h2></div>

const Content = ({ parts }) => {
  return(
      parts.map(part => <li key={part.id}>{part.name} {part.exercises} </li>)
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0,
  );
  return (
    <div >
      Total of {sum} exercises
    </div>
  )
}

const Course = ({course}) => {
    return(
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
    )
  }



export default Course
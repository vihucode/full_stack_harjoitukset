
import { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const adder = (n, rd) => {
  const copy = [...n]
  copy[rd] += 1
  return(
    copy
  )
}

const randomNumber = (current) => {
  let rd
  while (true){
    rd = Math.floor((Math.random() * 6) + 1)
    if (rd == current){
      continue;
    }else{
      break;
    }
  }
  return (rd)
}

const mostVotes = (pointList) => {
  let voteCount = pointList.reduce((a, b) => a + b, 0);
  if (voteCount == 0){
    return(NaN)
  }else{
    return (
      pointList.indexOf(Math.max(...pointList))
      )
  }
  
}

const highVotes = (pointList) => {
  if (Math.max(...pointList) > 0){
    return (
      <div>
        has {Math.max(...pointList)} votes
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(randomNumber(-1))
  const [pointList = Array(7).fill(0), addPoints] = useState()

  const rdanec = () => setSelected(randomNumber(selected))
  const addPoint = () => addPoints(adder(pointList, selected))
  
  console.log(pointList)
  console.log(pointList.indexOf(Math.max(...pointList)))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>
      has {pointList[selected]} votes <br/>
      <Button
        handleClick={addPoint}
        text="vote"
      />
      <Button
        handleClick={rdanec}
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes(pointList)]}<br/>
      {highVotes(pointList)}
    </div>
  )
   

}

export default App
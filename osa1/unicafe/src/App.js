import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.all_feed != 0 ){ 
    return(
      <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={(good - bad) / all} />
      <StatisticLine text="positive" value ={(good / all ) * 100} />
      </div>
    )
  }else{
    return(
      <p>
        No feedback given
      </p>
    )
  }
}

const StatisticLine = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  let all = good + neutral + bad


  return (
    <div>
      <p > 
        <h1>give feedback </h1>
      </p>
      <Button
        handleClick={addGood}
        text="good"
      />
      <Button
        handleClick={addNeutral}
        text="neutral"
      />
      <Button
        handleClick={addBad}
        text="bad"
      />
      <span>
        <h1>statistics</h1>
        {total > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} />) : 'No feedback'}
      </span>

    </div>
  )
}

export default App
import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  if (props.all !== 0 ){ 
    return(
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good"/></td>
            <td><StatisticLine value ={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="neutral"/></td>
            <td><StatisticLine value ={props.neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad"/></td>
            <td><StatisticLine value ={props.bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="all"/></td>
            <td><StatisticLine value ={props.all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" /></td>
            <td><StatisticLine value={(props.good - props.bad) / props.all} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" /></td>
            <td><StatisticLine value ={(props.good / props.all ) * 100 } text1="%"/></td>
          </tr>
        </tbody>
      </table>
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
      {props.text} {props.value} {props.text1}
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
      <h1>give feedback </h1>
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
      <h1>statistics</h1>
      <span>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      </span>
      
    </div>
  )
}

export default App
import {useState} from 'react'

const App = () =>{

  // to save clicks of each button
  const [good, setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleClickGood =() =>{
    setGood(good+1)
  }
  const handleClickBad =() =>{
    setBad(bad+1)
  }
  const handleClickNeutral =() =>{
    setNeutral(neutral+1)
  }
  const all = good+bad+neutral
  const average = (good*1 + bad*-1)/all
  const positive = good/all * 100
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleClickGood} text={"good"}/>
      <Button handleClick = {handleClickNeutral} text={"neutral"}/>
      <Button handleClick = {handleClickBad} text={"bad"}/>
   
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad}
       neutral = {neutral} average = {average} all = {all}
       positive = {positive}/>
      
   
    </div>
  )

}
const Statistics = (props) =>{
  console.log(props)
  if(props.good === 0 && props.neutral === 0 && props.bad ===0 
    && props.all ===0 && isNaN(props.average) && isNaN(props.positive)){
      return(
        <p>No feedback given</p>
      )
    }

  return(
  <div>
  <table>
  <StatsiticLine text = "good" value = {props.good}/>
 
  <StatsiticLine text = "neutral" value = {props.neutral}/>
  
  <StatsiticLine text = "bad" value = {props.bad}/>

  <StatsiticLine text = "all" value = {props.all}/>
  
  <StatsiticLine text = "average" value = {props.average}/>
  
  <StatsiticLine text = "positive" value = {props.positive}/>
  </table>
  </div>
  )
}
const StatsiticLine = (props) =>{
  if(props.text === 'positive')
  return(
    <tr><td>{props.text}</td> <td>{props.value} %</td></tr>
  )
  return(
  <tr><td>{props.text}</td> <td>{props.value}</td></tr>)
}
const Button = (props) => <button onClick = {props.handleClick}>{props.text}</button>


export default App;

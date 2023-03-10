import {useState} from 'react'

// var n = 7  // arbitrary length
// let a = Array(n).fill(0)

//const copies = [...a]

const App = () =>{
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

 
  const [selected, setSelected] = useState(0)
 
  const [votes,setVotes] = useState(Array(7).fill(0))
  const handleAnec = () =>{
    setSelected(Math.floor(Math.random()*7))
  }

  // const handleVotes = () =>{
  //   //votes = copies[selected]
  //   copies[selected] +=1;
  //   setVotes(copies[selected])   
  // }
  const handleVotes = () =>{
      //votes = copies[selected]
      const updated = [...votes]
      updated[selected]+=1
      setVotes(updated)   
      console.log(typeof(updated) + " updated") // coming out yo be object
    }
    
  var  max = Math.max(...votes);
  console.log(typeof(votes))
  var index = votes.indexOf(max)


  return (
    <div>
      <h1>Anecdote of the day</h1>
     <p> {anecdotes[selected]}</p>
     <p> has {votes[selected]} votes</p>
     <Button onClick = {handleVotes} text="vote"/>
      <Button onClick = {handleAnec} text = "next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p> has {max} votes</p>
    </div>
  )
}

const Button = (props) =>
  <button onClick={props.onClick}>{props.text}</button>

export default App;

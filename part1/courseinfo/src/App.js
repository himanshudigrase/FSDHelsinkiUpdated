import {useState} from 'react'



const Header = (props) =>{
  console.log(props);
  return (
    
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>{
  console.log(props);
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}


const Content = (props) =>{
  console.log(props);
  return(
    <div>
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>

  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>

  )
}

const App =() =>{

  const course =  {
    name: 'Half Stack application developement',
    parts: [
      {
        name:'Fundamentals of react',
        exercises : 10
      },
      {
        name:'Using props to pass data',
        exercises:7
      },
      {
        name:'State of component',
        exercises: 14
      }
    ]
  }



  // const [left,setleft] = useState(0)
  // const [right,setright] = useState(0)

  const [clicks,setClicks] = useState({left:0,right:0})
  const [allClicks,setAllClicks] = useState([])
  const settingLeft = () =>{
    
    setClicks({
      ...clicks,
      left:clicks.left+1,
    })
    setAllClicks(allClicks.concat('L'))
  }
  const settingRight = () =>{
  
    setClicks({
      ...clicks,
      right: clicks.right+1
    })
    setAllClicks(allClicks.concat('R'))
  }

  return(
  <div>
    <Header course={course.name}/>
    <Content parts = {course.parts}/>

    <Total parts = {course.parts}/>
   

    <Button onClick = {settingLeft} text = 'left'/>
    <Display click = {clicks.left}/>
    <Button onClick = {settingRight} text='right'/>
    <Display click = {clicks.right}/>

    <History allClicks = {allClicks}/>
  </div>
)}

const History = ({allClicks}) =>{
  if(allClicks.length === 0){
    return(
      <div>
        the app is used by pressing button history
      </div>
    )
  }
  return(
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}
const Button = (props) => {
console.log('props value is',props)

const {onClick,text} = props
return(
<button onClick={onClick}>{text}</button>
)}
const Display = ({click}) => <div>{click}</div>
export default App;

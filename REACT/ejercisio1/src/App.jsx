const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};
const Part = (props) =>{
  return(
    <div>
      <p>{props.part}</p>
    </div>
  )
};
const Content = () =>{
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  return(
    <div>
      <Part part ={part1}/>
      <Part part ={part2}/>
      <Part part ={part3}/>
    </div>
  )
};

const Total = () =>{
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>

  )
};

const App = () =>{
  const course = 'Half Stack application development'
  return(
    <div>
      <Header course={course}/> 
      <Content/>
      <Total/>
    </div>
  )
}
export default App;

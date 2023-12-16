const Hello=(props)=>{
  return(
    <div>
      <h1>Hola {props.name}</h1>
    </div>
  )
}

const App=()=>{

    const friends=[
      {name:'Daniel',age:4}
    ]
  return(
    <>
      <h1>Greetings</h1>
      <Hello name='Daniel'/>
      <p>{friends[0].name} {friends[0].age}</p>
    </>
  )
}

export default App;
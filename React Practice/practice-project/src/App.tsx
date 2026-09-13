import Card  from './component/card'

const App = () => {


  function btnclicked(){
    console.log("btn is clicked ...");
    
  }


  function sakib(elem){
    console.log(elem);
    
  }


  return (
    <div>
      <h1>sakib</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deleniti rerum expedita possimus? Maxime delectus voluptas, voluptates placeat excepturi at, iste id facere eum neque consectetur asperiores, autem quia dolore.</p>

      <Card user="sakib" age = {25}/>
      <Card user="shahriar" age = {23}/>


      <button onMouseEnter={btnclicked}>click me </button>



      <input onChange={(elem)=>{
        sakib(elem.target.value)
      }}type="text" placeholder='write here ' />


    </div> 
  )
}

export default App
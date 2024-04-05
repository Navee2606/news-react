import Navbar from './component/Navbar';
import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import News from './component/News';
import LoadingBar from 'react-top-loading-bar';



//import Inventory from './component/inventory';
/*function onClickme(){
  alert("you have clicked me");
}

  

function App() {
  const [ count,setCount] = useState(0)
  function updateCounter(){
    setCount(count+1)
  }
  const Courses =[
  {
    id:4,
    tittle:"css",
    price:155
  },
  {
    id:4,
    tittle:"css",
    price:155
  },

]
const listItems = courses.map(course =>
  <li key={courses.id}>
    {courses.tittle} {courses.price}
  </li>
  
  )
  return (
    <div>
    <div className="App">
      <h1>Reacts mapping</h1>
      <ul>
        {listItems}
      </ul>
    <button onClick={onClickme}> Click me </button>
    </div>
    <div>
      <button onClick={updateCounter}>
        Clicked{count} times
      </button>
    </div>
    <hr />
    <Inventory size={90} person={{
      name:"anees",
      role:"developer"

    }} />

   

    </div>
  );
}

function App() {
  return(
   <>
   <Navbar />
<News />
   </>
  )
}



export default App;   
*/
export default class App extends Component{
 state={
  progress:0
 }
 setProgress=(progress)=>{
  this.setState({progress:progress})
 }

  render(){
    return(
      <>
      <Router>
      <Navbar />
      <LoadingBar 
      color='red'
      height="7px"
      progress={this.state.progress}
      />

      <Routes>
      <Route exact path="/" element={<News key="general" pageSize={9} setProgress={this.setProgress} country="in" />}/>
       <Route exact path="/business"   element={<News key="business" pageSize={9} setProgress={this.setProgress} category='business' country="in" /> }  />
       <Route exact path="/entertainment"  element={<News key="entertainmen" pageSize={9} setProgress={this.setProgress} category='entertainment' country="in" /> }  />
       <Route exact path="/general"   element={<News key="general" pageSize={9} setProgress={this.setProgress} category='general' country="in" /> }  />
       <Route exact path="/health"   element={<News key="health" pageSize={9} setProgress={this.setProgress} category='health' country="in" /> }  />
       <Route exact path="/science"   element={<News key="science" pageSize={9} setProgress={this.setProgress} category='science' country="in" /> }  />
       <Route exact path="/sports"   element={<News key="sports" pageSize={9} setProgress={this.setProgress} category='sports' country="in" /> }  />
       <Route exact path="/technology"   element={<News key="technology" pageSize={9} setProgress={this.setProgress} category='technology' country="in" /> }  />
       
      </Routes>
      </Router>
      </>
    )
  }
}
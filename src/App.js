import React,{Component} from "react";
import  "./App.css";
import Add from "./component/data"

class App extends Component{
  
  render(){
    return (
        <div className="App" >
          <div id="app">
            <p>CHANGE YOUR DATA</p> <br/>
            <Add/>
          </div>
        </div>
  );} 
}

export default App;

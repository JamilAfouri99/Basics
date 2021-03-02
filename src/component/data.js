import React,{Component} from "react";
import "./data.css"

class Add extends Component{
    state={
        name:" Your name",
        and:" & ",
        age:"Your age"
    }
    info=(e)=>{
        e.preventDefault();
        if(document.querySelector(".me").value.length>0 && document.querySelector(".mee").value.length>0){
        document.querySelector("#text").style.display="flex"}
        else{
            document.querySelector("#text").style.display="none"
        }
    }
    namy=(x)=>{
        this.setState({
            ...this.state,
            name:x.target.value
        })
    }
    agy=(y)=>{
        this.setState({
            ...this.state,
            age:y.target.value
        })
    }
    render(){
        return(
            <div id="add">
                <form onSubmit={this.info}>
                    Name <input class="me" type="text" onChange={this.namy}/><br/>
                    Age  &nbsp;&nbsp;&nbsp;&nbsp; <input class="mee" type="number" onChange={this.agy}/><br/>
                    <button>Submit</button><br/>
                </form>
                <p id="text"> &nbsp; My name is {this.state.name}<br/>{this.state.and} My age is {this.state.age}</p>
            </div>
        )
    }
}

export default Add
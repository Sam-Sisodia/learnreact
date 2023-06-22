import React,{Component} from "react";

// This is class props componet  we user this.props.name here

class StudentClassComponet extends Component{
    render(){
        return <h1> This is class props componet  we user this.props.name here   {this.props.name}</h1>
    }
};

export default StudentClassComponet;
import React, { Component } from 'react'
import Card from "./Card"
import './style.css'
export default class App extends Component {
  state={
    fullName:"neymar",
    bio:"Neymar da Silva Santos Júnior, dit Neymar Jr. et plus couramment appelé Neymar, né le 5 février 1992 à Mogi das Cruzes",
    Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWZFLbmv1IPwQmNPYJg5CkvdYatSWWBGx4Tkv8aVN&s",
    profession:"player",
    condition:false,
  };
  render() {
    return (
      
      <>
      <div className='bodyy'>
      <button className='btn' onClick={()=>this.setState({condition:!this.state.condition})}>affichage</button>
      {this.state.condition ==true ?(
      <div className='cardd'><Card mdm={this.state}/></div>):("")}
</div>
      </>
    )
  }
}

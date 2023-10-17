 import React, { Component } from 'react'
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
 export default class card extends Component {
  state={time:0
  }
  componentDidMount() { 
    setInterval(()=>{this.setState({time:this.state.time+1})},1000)

   }
   

   render(props) {

     return (
      <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.mdm.Image} />
        <Card.Body>
          <Card.Title>{this.props.mdm.fullName}</Card.Title>
          <Card.Text>{this.props.mdm.bio}<br/>{this.props.mdm.profession}
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <h1>start time{this.state.time}</h1>
      </>
     )
   
    
   }
 }
 
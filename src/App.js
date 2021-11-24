import React from 'react'
import { Component } from 'react';
 import Form from './Form';
 import View from './View';
 import Popup from './Popup';


class App extends Component {
  state = {
    firstname: '',
    lastname: '',
    phoneNumber: '',
    role: '',
    message: '',
    showPopup: false,
  };


  eventHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  cancelHandler = () => {
    window.location.reload();
  }
  
  confirmDataHandler = (event) =>{
    this.setState({
      [event.target.name]: false
    });
  }

  submitPopupHandler = (event) =>{
    event.preventDefault();
    if (this.state.firstname !== '' & this.state.lastname !== '' & this.state.phonenumber !== '' & this.state.role !== '') {
    this.setState({
      [event.target.name]: true
    });
  }
  } 


  render(){
  return (
    <div className="components">
      <Form eventHandler={this.eventHandler} submitPopupHandler={this.submitPopupHandler} />
      <Popup state={this.state} cancelHandler={this.cancelHandler} confirmDataHandler={this.confirmDataHandler}/>
      <View state={this.state}/>
    </div>
  );
  }
}

export default App;

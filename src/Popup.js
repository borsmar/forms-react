import React, {Component} from "react";

class Popup extends Component{
   
    state ={
        showPopup: true
    }


    render(){
        return(<div>{
            this.props.state.showPopup && 
            <div class='popupwrap'> 
            <div class='popup'>
                <p className='first-name'>First name: {this.props.state.firstname}</p>
                <p className='last-name'>Last name: {this.props.state.lastname}</p>
                <p className='role'>Phone number: {this.props.state.phoneNumber}</p>
                <p className='role'>Role: {this.props.state.role}</p>
                <p className='message'>Message: {this.props.state.message}</p>
                <div className='button-wrapper'>
                            <button className='confirm' name='showPopup' onClick={this.props.confirmDataHandler}>Confirm</button>
                            <button className='cancel' onClick={this.props.cancelHandler}>Cancel</button>
                        </div> 
                </div>
                </div>
        }
        </div>
        )
    }
}

export default Popup;
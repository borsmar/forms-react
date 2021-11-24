import React, {Component} from "react";

class View extends Component {
    render() {
        return (
            <div class='container'>
                <h1>This is your input: </h1>
                <p className='first-name'>First name: {this.props.state.firstname}</p>
                <p className='last-name'>Last name: {this.props.state.lastname}</p>
                <p className='role'>Phone number: {this.props.state.phoneNumber}</p>
                <p className='role'>Role: {this.props.state.role}</p>
                <p className='message'>Message: {this.props.state.message}</p> 
            </div>
        ); 
    };
};
export default View;
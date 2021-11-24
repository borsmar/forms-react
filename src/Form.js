import React, {Component} from "react";

 class Form extends Component{


    render(){
        return(
            <div class='container'>
        <form>
            <label for="firstname">Firstname</label>
            <input type="text" className="input" id="firstname" name ="firstname" onChange={this.props.eventHandler}/>
            <label for="lastname">Lastname</label>
            <input type="text" className="input" id="lastname" name ="lastname" onChange={this.props.eventHandler}/>
            <label for="phonenumber">Phone</label>
            <input type="text" className="input" id="phonenumber" name ="phoneNumber" onChange={this.props.eventHandler}/>
            <label for="role">Role</label>
            <select className="select-role" name="role" onChange={this.props.eventHandler}>
                    <option className="defaultOption" disabled selected>Choose role</option>
                    <option value='Teacher'>Teacher</option>
                    <option value='Student'>Student</option>
            </select>
            <label for="message">Message</label>
            <textarea className="textarea" name ="message" onChange={this.props.eventHandler}/>
            <button type="submit" name='showPopup' onClick={this.props.submitPopupHandler}>Submit</button>
        </form>
        </div>
        )
    }
}

export default Form;

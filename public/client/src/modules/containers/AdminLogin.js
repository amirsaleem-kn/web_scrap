import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleAdminLogin } from '../../actions'

class AdminLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'amirsaleem96',
            password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onFormChange (e, type) {
        console.log(type);
        if(type == 'username'){
            this.setState({ username: e.target.value });
        } else if (type == 'password') {
            this.setState({ password: e.target.value });
        }
    }
    handleSubmit(e) {
        console.log('here');
        e.preventDefault();
        this.props.handleAdminLogin(this.state.username, this.state.password);
        alert('something went wrong');        
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' value = {this.state.username} onChange = { (e) => this.onFormChange.bind(this, e, 'username')}/>
                    <input type = 'password' value = {this.state.password} onChange = {(e) => this.onFormChange.bind(this, e, 'password')}/>
                    {/* <button onClick = {() => {alert('yes')}}>Login</button> */}
                </form>
                <button onClick = {() => {alert('yes')}}>Login</button>
            </div>
        )
    }
}

function mapDispatchToProps ( dispatch ) {
    return bindActionCreators( {handleAdminLogin}, dispatch );
}

export default connect(null, mapDispatchToProps)(AdminLogin);
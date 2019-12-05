import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../../services/user-service';

import './styles.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            rote: './calendars'
        }
    }

    login = () => {
        const {name, password} = this.state;

        if(!name || !password) {
            alert('Fill the fields to complete login.');
            return;
        }
        userService.login(name, password);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="login-page">

                <div className="login-box">
                    
                    <div className="title-box">
                        <h1 className="first-title">Calendar</h1>
                        <h1 className="second-title">App</h1>
                    </div>

                    <h2 className="title-login">Login</h2>

                    <div className="name-box">
                      <label>Name</label>
                      <input value={this.state.name} onChange={this.handleChange} type="text" name="name" />
                    </div>

                    <div className="password-box">
                        <label>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" ></input>
                    </div>

                    <div className="buttons-box">
                        <Link to='./calendar'><button onClick={()=>this.login()}>Sign in</button></Link>
                        <Link to="./register"><button>Create account</button></Link>
                    </div>
                </div>

            </div>
        )
    }
}

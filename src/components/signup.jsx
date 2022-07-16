import React from 'react'
import Form from './form';
import Joi from "joi-browser";

class SignUp extends Form {
    state = {
        data: { username: '', password: '',
                email: '', name: ''},
        errors: {}
     }

     schema = {
        username: Joi.string().min(5).max(30).required().label('Username'),
        password: Joi.string().min(5).max(30).required().label('Password'),
        name: Joi.string().max(30).required().label('Name'),
        email: Joi.string().email().required().label('Email'),
    };
 
     doSubmit = () => {
         //calll the server
     }
 
     render() { 
         return (
         <div>
             <h1>Sign up</h1>
             <form onSubmit={this.handleSubmit}>
                 {this.renderInput('username', 'Username')}
                 {this.renderInput('password', 'Password', 'password')}
                 {this.renderInput('name', 'Name',)}
                 {this.renderInput('email', 'Email', 'email')}
                 {this.renderButton('Login')}
             </form>
         </div>);
     }
}
 
export default SignUp;
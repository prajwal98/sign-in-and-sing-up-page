import React, { Component} from "react";
import { auth } from "./config/firebase";
//import { Link } from "@reach/router";
import './Login.styles.scss';


class Login extends Component {

    constructor(){
        super();

        this.state = {
            email: '',
            password:''
        }
    }

    handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
             await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'', password:''})
        }catch (error){
            alert(error)
        }

    }

    handleSignUp = async event => {

        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.createUserWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})
        } catch (error){
            alert(error)
        }
    }

    handleChange = event => {
        event.preventDefault();

        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='section-book'>
                <div className='row'>
                    <div className='book'>
                        <div className='book__form'>
                            <form className='form'>
                            <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Sign In Page Sign Up Page
                                    </h2>
                                </div>
                                <div className='form__group'>
                                    <input
                                        name='email'
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder='Email'
                                        className='form__input'
                                        required
                                    />
                                    <label for='email' className='form__label'>Email</label>
                                </div>
                                <div className='form__group'>
                                    <input
                                        name='password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder='Password'
                                        className='form__input'
                                        required
                                    />
                                    <label for='password' className='form__label'>Password</label>
                                </div>
                               
                               
                                    <button name='size' className='btn btn--green' onClick={this.handleSignIn}>Sign In</button>
                            
                              
                                
                                    <button name='size' className='btn btn--green' onClick={this.handleSignUp}>Sign Up</button>
                            
                              
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

       
    

export default Login;
import React, { Component } from 'react';

import fire from './config/Fire';

import './Login.styles.scss';

class Login extends Component {
    constructor(props){
        super(props);
        
        //this.signup = this.signup.bind(this);
        
        this.state= {
            email:'',
            password: ''
        }
        
    }
    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await fire.auth().signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          alert(error);
        }
      };

      handleSignUp = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await fire.auth().createUserWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          alert(error);
        }
      };

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    
    render(){
        return(
            <div className='section-book'>
                <div className='row'>
                    <div className='book'>
                    <div className="book__form">
                            <form className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Sign In & sign Up Page
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input
                                        name='email'
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className='form__input'
                                        placeholder='Email'
                                        required
                                    />
                                </div>

                                <div className="form__group">
                                <input
                                        name='password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        className='form__input'
                                        placeholder='password'
                                        required
                                    />
                                    
                                </div>


                               

                                <div className="form__group">
                                    <button onClick={this.handleSubmit} className="btn btn--green">Sign In &rarr;</button>
                                </div>
                                
                                <div className="form__group">
                                    <button onClick={this.handleSignUp} className="btn btn--green">Sign Up &rarr;</button>
                                </div>
                                
                                   
                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
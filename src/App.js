import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import fire from './config/Fire';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount(){

    this.authListener();
  }

authListener() {
  fire.auth().onAuthStateChanged((user) =>{
    //console.log(user)
    if(user){
      this.setState({user})
    } else {
      this.setState({user: null})
    }
  })
}

  render(){
    return (
      <div className="App">
      {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    );

  }
}

export default App;
/*
*/
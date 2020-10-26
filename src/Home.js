import React from 'react';
import { auth } from './config/firebase';

class Home extends React.Component {

    constructor(){
        super();
        this.state= {
            
        }
        
    }

    logout = event => {
        event.preventDefault();

        auth.signOut();
    }
    render(){
        return(
           
               <div>
                    <h1>You are logged In</h1>
                     <button onClick={this.logout}>Logout</button>
                  
               </div>    

             
            
        )
    }
}

export default Home;
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
           
               <div className='section-book' >
                    <div className='row'>
                        <div className='book'>
                        <div className='book__form'>
                            <form className='form'>
                            <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                    You are logged In
                                    </h2>
                                   
                                </div>

                                <button className='btn btn--green' onClick={this.logout}>Logout</button>
                                </form>
                                </div>
                                
                        </div>
                    </div>
                   
                    
                  
               </div>    

             
            
        )
    }
}

export default Home;
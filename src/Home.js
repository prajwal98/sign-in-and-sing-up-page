import React from 'react';
import fire from './config/Fire';

class Home extends React.Component {


    constructor(props){
        super(props);

        this.state = {


        }
    }

    logout(){
        fire.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    
    render(){
        return(
            <div className='section-book'>
                <div className='row'>
                    <div className='book'>
                    <div className="book__form">
                            <form className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        You are logged In
                                    </h2>
                                  
                                    
                                </div>

                    

                               

                           
                                
                                <div className="form__group">
                                    <button onClick={this.logout} className="btn btn--green">logout &rarr;</button>
                                </div>
                                
                                   
                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
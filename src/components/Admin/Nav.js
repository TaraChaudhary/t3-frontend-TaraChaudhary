import React from 'react'

import '../../containers/People/css/style.css'

import {Link} from 'react-router-dom';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Home extends React.Component {
  
render() {   
   
        return (
            <section>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
            
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" className="button" to="/login">Login </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" className="button2 " style={{marginLeft:'2px'}} to="/signup">Sign up</Link>
                </li>
             </ul>
             
            
              
                
            </div>
        </nav>
          </section>
  
   
        )
    }
}

export default Home
import React from 'react'
import { withRouter,Link,Redirect } from 'react-router-dom'
import axios from 'axios'
import './user.css'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        user: null,
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        selectedFile: null,
    }
}
Logout=()=>
{
axios.post("http://localhost:5000/logout", this.state.config);
    localStorage.removeItem('token')
    window.location.href='/login'
    return <Redirect to='/login'></Redirect>
}

 


    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <Link className="navbar-brand" to="/home"><h2>Traffic Driving exam</h2></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/listuser">All user <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/adduser">Add User <span class="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <Link className="dropdown-item" to="/addcategory">Add Category</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/listcategory">List Category</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sign
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <Link className="dropdown-item" to="/addsign">Add Sign</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="/listsign">List Sign</Link>
        </div>
      </li>
              </ul>
             
            
              
                    <div className="nav navbar-nav navbar-right">
                    <li className="nav-item dropdown" >
                  
                  <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className='img-thumbnail' style={{marginRight:'10px'}}
                                    width='30' src={`http://localhost:5000/uploads/${localStorage.getItem('image')}`} alt="Profile "/>

    Hello {localStorage.getItem('firstname')} {localStorage.getItem('lastname')}
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    
                    <Link className="dropdown-item" to="/profile">Profile</Link>
                    <div className="dropdown-divider"></div>
                    
                    <Link className="dropdown-item" href="#" onClick={this.Logout}>Logout</Link>
                  </div>
                </li>
               
                       </div>
             
            </div>
        </nav>
        )
    }
}

export default withRouter(Navigation)


import React from 'react'
import Axios from 'axios'
import './css/style.css'

import {Link, Redirect} from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        username : '',
        password : '',
        isLoggedIn: false
        
    }}
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    Login = (e) =>{
        e.preventDefault();
      const  userdata = {
            username: this.state.username,
            password: this.state.password
        }

        Axios.post("http://localhost:5000/login", userdata).then ((response)=>{
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            localStorage.setItem('firstname', response.data.firstname)
            localStorage.setItem('lastname', response.data.lastname)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('phone', response.data.phone)
            localStorage.setItem('image', response.data.image)
            this.setState({ isLoggedIn: true })
        }).catch((err) => console.log(err.response))
  
}
render() {   
    if (this.state.isLoggedIn === true) {
        return <Redirect to='/dashboard' />
    }
        return (
           <section>
                  <nav className="navbar navbar-expand-lg navbar-light bg-white">
            
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" className="button3" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                
             </ul>
             
            
              
                
            </div>
        </nav>
      
            <div class="container">
                
		<div class="img">
			<img src={require("./img/bg.svg")}/>
		</div>
		<div class="login-content">
			<form onSubmit={this.Login}>
				<img src={require("./img/avatar.svg")}/>
				<h2 class="title">Welcome</h2>
           	
           		
                <div class="form-group">
           		   		<input type="text" className="form-control" placeholder="Username"  value={this.state.username} onChange={this.handleChange} name="username" required="required"/>
           	
           		</div>

                
           		
           		  
					 
					
               <div class="form-group">
           		    	
   <input type="password" placeholder="Password" className="input form-control" id="password-field" value={this.state.password} onChange={this.handleChange} name="password" required="required"/>
					</div>	 
				
				
			

            	<Link to="">Forgot Password?</Link>
            	<input type="submit" class="btn" value="Login" />

                <Link class="nav-link" to="/signup">Not yet a user? Sign Up here!</Link>
 
            </form>
            </div>
              </div>
  
              </section>
        )
    }
}

export default Login
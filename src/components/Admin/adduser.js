import React, { Component } from 'react'
import '.././user.css'
import axios from 'axios'
import {  Redirect} from 'react-router-dom';
import { CustomInput } from 'reactstrap'
import Navigation from '../Navigation';
import Footer from '../../containers/People/Footer'


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

 class Adduser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            phone:'',
            username: '',
            password: '',
            image:'',
            selectedfile: '',
            isRegistered: false
        }
    }
    
    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('imageFile', this.state.selectedFile)
        axios.post('http://localhost:5000/upload/image', data)
            .then((response) => {
                this.setState({
                    image: response.data.filename
                })
            }).catch((err) => console.log(err.response))
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:5000/signup', this.state)
            .then((response) => {
                console.log(response.data);
         
                       this.setState({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email:this.state.email,
                    phone:this.state.phone,
                    username: this.state.username,
                    password:this.state.password,
                  
                });

                this.setState({ isRegistered: true })

            }).catch((err) => console.log(err))

            
    }
    render() {
        if (this.state.isRegistered === true) {
            alert("Register success")
    
            return <Redirect to='/dashboard' />
        }
        return (
            <section>
                <Navigation></Navigation>
            <div className="col-4 mx-auto ">
            
            <div className="login-content">
                
                <form  onSubmit={this.register} >
                <img src={require("../../containers/People/img/avatar.svg")} alt="user"/>
				
                <div className="form-group">
                                  <input type="text" placeholder="Firstname" className="form-control" name="firstname" required="required"  value={this.state.firstname} onChange={this.handleChange} />
                   
                       </div>
                       <div className="form-group">
                                  <input type="text" placeholder="Lastname" className="form-control" name="lastname" required="required"  value={this.state.lastname} onChange={this.handleChange} />
                   
                       </div>
                       <div className="form-group">
                                  <input type="text" placeholder="Email" className="form-control" name="email" required="required"  value={this.state.email} onChange={this.handleChange} />
                   
                       </div>
                       <div className="form-group">
                                  <input type="text" placeholder="Mobile number" className="form-control" name="phone" required="required"  value={this.state.phone} onChange={this.handleChange} />
                   
                       </div>
                       
                    <div className="form-group">
                                  <input type="text" placeholder="Username" className="form-control" name="username" required="required"  value={this.state.username} onChange={this.handleChange} />
                   
                       </div>
    
                    
                       
                         
                         
                        
                   <div className="form-group">
                               
       <input type="password" placeholder="Password"className="input form-control" id="password-field" name="password" required="required"  value={this.state.password} onChange={this.handleChange} />
                        </div>	

                        <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<button className="bg-info" style={{marginTop:'10px'}}
                                    onClick={this.uploadFile} >Upload Profile</button>) : null}
                    
                    
        
                    <input type="submit" className="btn" value="Register" />
    
                  
     
                </form>
                </div>
                  </div>
                  <Footer></Footer>
                  </section>
       
               

        )
    }
}

export default Adduser
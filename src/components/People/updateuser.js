import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
import { CustomInput } from 'reactstrap'
import Footer from '../../containers/People/Footer'
class UpdateSingleUser extends React.Component {
    state = {
        singledata: [],
        username : '',
        lastname: '',
        firstname : '',
        image:'',
        email : '',
        phone : '',
        selectedfile: ''
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

    componentDidMount() {
        axios.get("http://localhost:5000/user/" + this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ 
                singledata: res.data,
                username : res.data.username,
                firstname : res.data.firstname,
                lastname : res.data.lastname,
                email : res.data.email,
                phone : res.data.phone ,
                image : res.data.image  
             })
        })
    }

    UpdateData = () => {
        const data = {
            username : this.state.username,
            email : this.state.email,
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            phone: this.state.phone,
            image: this.state.image
        }

        axios.put("http://localhost:5000/single/" + this.props.match.params.id,
            data)
        window.location.reload(false)
        window.location.href='/dashboard'
        return <Redirect to='/dashboard'></Redirect>

    }


    render() {
        return (
            <section>
                <Navigation></Navigation>
            

            <div className="col-4 mx-auto" style={{marginTop:'20px'}} >
                
    <div class="mx-auto">

            <div class="form-group">
            <label style={{marginTop:'8px'}}>Firstname:</label>
            <input type="text"  class="form-control"style={{float:'right', width:'300px'}} id="name" placeholder="Enter Firstname" name="firstname" value = {this.state.firstname} 
                    onChange={(event)=>this.setState({firstname:event.target.value})}/>
        </div>
        <div class="form-group">
        <label style={{marginTop:'8px'}}>Lastname:</label>
            <input type="text"  class="form-control"style={{float:'right', width:'300px'}} id="name" placeholder="Enter Lastname" name="lastname" value = {this.state.lastname} 
                    onChange={(event)=>this.setState({lastname:event.target.value})}/>
        </div>
       
        <div class="form-group">
          
        <label style={{marginTop:'8px'}}>Email:</label>
            <input type="text"  class="form-control"style={{float:'right', width:'300px'}} id="address" placeholder="Enter Email Address" name="email" value = {this.state.email} 
                    onChange={(event)=>this.setState({email:event.target.value})}/>
        </div>
        <div class="form-group">
           
        <label style={{marginTop:'8px'}}>Mobile:</label>
            <input type="text"  class="form-control"style={{float:'right', width:'300px'}} id="mobile" placeholder="Enter Mobile Number" name="phone" value = {this.state.phone} 
                    onChange={(event)=>this.setState({phone:event.target.value})}/>
        </div>
        <div class="form-group">
        
        <label style={{marginTop:'8px'}}>Username:</label>
            <input type="text"  class="form-control"style={{float:'right', width:'300px'}} id="mobile" placeholder="Username" name="username" value = {this.state.username} 
                    onChange={(event)=>this.setState({username:event.target.value})}/>
        </div>

        <img className='img-thumbnail'
                                    width='100' src={`http://localhost:5000/uploads/${this.state.image}`}
                                    alt="profile"/>

<CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<button className="bg-info" style={{marginTop:'10px'}}
                                    onClick={this.uploadFile} >Upload</button>) : null}
         
            
        <button type="submit" onClick={this.UpdateData} class="btn btn-success">Update</button>
       
            </div></div>  <Footer></Footer>  </section>
        )
    }
}

export default UpdateSingleUser
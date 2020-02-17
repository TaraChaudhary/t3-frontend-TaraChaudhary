import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
import '../../containers/People/css/style.css'
import Footer from '../../containers/People/Footer'
import { CustomInput } from 'reactstrap'


class AddSign extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description:'',
            image:'',
            selectedfile: '',
            issign:false
            
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

    AddCategory = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:5000/sign', this.state)
            .then((response) => {
                console.log(response.data);
         
                       this.setState({
                    name: '',
                    description: '',
                    
                 issign: true

               
                });

            }).catch((err) => console.log(err))
            window.location.reload(false)
            alert("Successfully added")
            window.location.href='/listsign'
            return <Redirect to='/listsign' />
                   
    }


    render() {
       
        return (
            <section>
                <Navigation></Navigation>
            
               <div className="col-4 mx-auto"  style={{marginTop:'40px'}}>
                
    <div className="mx-auto">
            
    <div >
    <form onSubmit={this.AddCategory}>
            <div className="form-group ">
                
            <label >Sign Name</label>

            <input type="text" className="form-control" id="name" placeholder="name" name="name" value={this.state.categoryname} onChange={this.handleChange}  required/>
        </div>
        <div className="form-group ">
            <label >Description</label>
            <input type="text" className="form-control" id="name" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} required />
        </div>

        <label >Sign Image</label>
        <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<button className="bg-info" style={{marginTop:'10px'}}
                                    onClick={this.uploadFile} >Upload</button>) : null}

       
                       
  
         <button type="submit"  className="btn btn-success">Add Category</button>
         </form>
            </div>
            
            </div> 
          
            </div>
         <Footer></Footer>
              </section>
        )
    }
}

export default AddSign
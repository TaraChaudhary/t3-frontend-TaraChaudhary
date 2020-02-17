import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
import '../../containers/People/css/style.css'
import Footer from '../../containers/People/Footer'

import { CustomInput } from 'reactstrap'
class EditSign extends React.Component {
    state = {
        singledata: [],
        name : '',
        description: '',
        image:'',
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
        axios.get("http://localhost:5000/singlesign/" + this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ 
                singledata: res.data,
              name : res.data.name,
                description : res.data.description,
                image : res.data.image
             })
        })
    }

    UpdateSign = () => {
        const data = {
            name : this.state.name,
            description : this.state.description,
            image : this.state.image
        }

        axios.put("http://localhost:5000/singlesign/" + this.props.match.params.id,
            data)
        window.location.reload(false)
        window.location.href='/listsign'
        return <Redirect to='/listsign'></Redirect>

    }


    render() {
        
        return (
            <section>
                <Navigation></Navigation>
                <div className="col-4 mx-auto" >
                
                <div className="mx-auto">
            
    <div className="center">

            <div className="form-group ">
            <label>Sign Name</label>
            <input type="text" className="form-control" id="name" placeholder="Signname" name="name" value = {this.state.name} 
                    onChange={(event)=>this.setState({name:event.target.value})}/>
        </div>
        <div className="form-group ">
            <label >Description</label>
            <input type="text" className="form-control" id="name" placeholder="Description" name="description" value = {this.state.description} 
                    onChange={(event)=>this.setState({description:event.target.value})}/>
        </div>
        
  
        <img className='img-thumbnail'
                                    width='200' src={`http://localhost:5000/uploads/${this.state.image}`}
                                    alt="Signimage"/>

<CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<button className="bg-info" style={{marginTop:'10px'}}
                                    onClick={this.uploadFile} >Upload</button>) : null}
         
            
         <button type="submit" onClick={this.UpdateSign} className="btn btn-success">Update Sign</button>
       
            </div>
            
            </div> 
          
            </div> 
            <Footer></Footer>
              </section>
        )
    }
}

export default EditSign
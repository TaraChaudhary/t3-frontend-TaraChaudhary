import React from 'react'
import axios from 'axios'

import '.././user.css'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
class SingleUser extends React.Component {
    state = {
        singledata: [],
        
    }



    componentDidMount() {
        axios.get("http://localhost:5000/user/"+this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ singledata: res.data })
        })
    }
    deleteUser = () => {
        axios.delete('http://localhost:5000/single/' + this.props.match.params.id)
        window.location.reload(false)
        alert("delete success")
        window.location.href='/dashboard'
        return <Redirect to='/dashboard'></Redirect>
    }

    render(){
        return(
            <section>
           <Navigation></Navigation>
                <div className="card top bg-info">
                <img className='img-thumbnail'
                                    width='300' src={`http://localhost:5000/uploads/${this.state.singledata.image}`} alt="profile"/>

  <h3> {this.state.singledata.firstname} {this.state.singledata.lastname}</h3>
  <p className  ="text-warning">{this.state.singledata.email}</p>
  <p>Harvard University</p>
 
  <p><button>{this.state.singledata.phone}</button></p>


                <h4>{this.state.singledata.username}</h4>

                <p><button type="button" className="bg-danger" onClick={this.deleteUser}>Delete</button></p>
                
               </div></section>
        )
    }
}

export default SingleUser
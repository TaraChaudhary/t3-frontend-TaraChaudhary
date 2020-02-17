import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import './css/user.css'




class People extends React.Component {

    state = {
      userid:'',
        mydata: []
    }



    componentDidMount() {
        axios.get("http://localhost:5000/signup").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }

    deleteUser = (userid) => {
      axios.delete(`http://localhost:5000/single/${userid}`)
      window.location.reload(false)
    
  }
    render() {
       
            return ( 

                <div  >
                <h1 >List of users</h1>
                <div className="col-8 mx-auto">
                <table className="table-center table-striped ">
                <thead>
                  <tr className="bg-info" >
                   
                    <th scope="col" >Firsname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {
                         this.state.mydata.map((hlists) => 
                         <tr>
           
               <td>   {hlists.firstname}  </td>
               <td>{hlists.lastname}</td>
      
      
               <td> <img className='img-thumbnail'
                                    width='50' src={`http://localhost:5000/uploads/${hlists.image}`}
                                    alt="Profile" /></td>
            
                
               <td style={{width:'10%'}}  >    <Link style={{ float:'left'}} to={"/updatesingleuser/" +hlists._id} className="text-info"><img src={require("./img/edit.png")} alt="edit"/></Link> 
               <Link to={"/singleuser/" +hlists._id} className="col-2 mx-auto"  style={{ float:'left'}}>
                   	<img src={require("./img/detail.png")} alt="detials"/></Link>     
                 
                       <Link style={{ float:'right'}}className="bg-white"onClick={() => this.deleteUser(hlists._id)}><img src={require("./img/delete.png")} alt="delete"/></Link>
                       
                       </td>   </tr>
                         )}</table></div></div>
             ) 
        
    
}
}

export default People
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/user.css'
import Footer from './Footer'




class Sign extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        signid: '',
        mydata: []
    }
}


    componentDidMount() {
        axios.get("http://localhost:5000/sign").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }
    deleteCat = (signid) => {
        axios.delete(`http://localhost:5000/singlesign/${signid}`)
            
        window.location.reload(false)
    }
    

    render() {
        return ( 

            <div  >
            <h3 >List of Sign</h3>
            <div className="col-8 mx-auto">
            <table className="table-center table-striped ">
            <thead>
              <tr className="bg-info" >
               
                <th scope="col" >SignName</th>
                <th scope="col">Descrition</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {
                     this.state.mydata.map((slists) => 
                     <tr>
       
           <td>   {slists.name}  </td>
           <td>{slists.description}</td>
  
           <td> <img className='img-thumbnail'
                                    width='50' src={`http://localhost:5000/uploads/${slists.image}`}
                                    alt="Signimage" /></td>
           <td style={{width:'10%'}}  > 
                   <Link to={"/editsign/" +slists._id} className="text-info"style={{ float:'left'}}><img src={require("./img/edit.png")} alt="edit"/></Link> 
                  <Link className="bg-white"onClick={() => this.deleteCat(slists._id)}><img src={require("./img/delete.png")} alt="delete"/></Link></td>
                     </tr>
                     )}</table></div>
                     <Footer></Footer>
                     </div>

                    
         ) 
    

}
}


export default Sign
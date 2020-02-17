import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/user.css'
import Footer from './Footer'




class Category extends React.Component {
    constructor(props) {
        super(props)
    this.state = {
        categoryid: '',
        mydata: []
    }
}


    componentDidMount() {
        axios.get("http://localhost:5000/category").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }
    deleteCat = (categoryid) => {
        axios.delete(`http://localhost:5000/singlecat/${categoryid}`)
            
        window.location.reload(false)
    }
    

    render() {
        return ( 

            <div  >
            <h3 >List of Category</h3>
            <div className="col-8 mx-auto">
            <table className="table-center table-striped ">
            <thead>
              <tr className="bg-info" >
               
                <th scope="col" >CategoryName</th>
                <th scope="col">Descrition</th>
                <th scope="col">Image</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {
                     this.state.mydata.map((clists) => 
                     <tr>
       
           <td>   {clists.categoryname}  </td>
           <td>{clists.description}</td>
  
           <td> <img className='img-thumbnail'
                                    width='50' src={`http://localhost:5000/uploads/${clists.image}`}
                                    alt="Categoryimage" /></td>
           <td style={{width:'10%'}}  > 
                   <Link to={"/editcategory/" +clists._id} className="text-info"style={{ float:'left'}}><img src={require("./img/edit.png")} alt="edit"/></Link> 
                  <Link className="bg-white"onClick={() => this.deleteCat(clists._id)}><img src={require("./img/delete.png")} alt="delete"/></Link></td>
                     </tr>
                     )}</table></div>
                     <Footer></Footer>
                     </div>

                    
         ) 
    

}
}


export default Category
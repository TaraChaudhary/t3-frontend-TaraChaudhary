import React from 'react'


import '../user.css'
import { Redirect } from 'react-router-dom'

import Adminhome from '../Admin/Adminhome'
class Dashboard extends React.Component {

    state=
    {
        headerdata:
        {
            header : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        }
        }


componentDidMount()
    {
       
    }


    render() {
        if(this.state.headerdata.header.Authorization==="Bearer null")
        {
           return <Redirect to='/login'/>
        }
        return (
            <section>
               <Adminhome></Adminhome>

            </section>
        )
    }
}

export default Dashboard;

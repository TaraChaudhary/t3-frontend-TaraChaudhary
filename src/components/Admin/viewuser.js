import React from 'react'


import '../user.css'



import Navigation from '../Navigation'
import People from '../../containers/People/People'
class Listuser extends React.Component {

    
    render() {
      
        return (
            <section>
               <Navigation></Navigation>
               <People></People>

            </section>
        )
    }
}

export default Listuser;

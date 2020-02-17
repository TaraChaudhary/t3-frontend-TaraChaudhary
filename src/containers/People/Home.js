import React from 'react'


import Nav from'../../components/Admin/Nav'
import Home1 from'../../components/Admin/Home1'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Home extends React.Component {
  
render() {   
   
        return (
            <section>
             <Nav>></Nav>  
              <Home1></Home1></section>
  
   
        )
    }
}

export default Home
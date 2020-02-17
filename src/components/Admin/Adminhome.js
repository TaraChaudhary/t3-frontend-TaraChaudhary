import React from 'react'


import Home1 from'../../components/Admin/Home1'
import Navigation from '../Navigation'
import Footer from '../../containers/People/Footer'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Home extends React.Component {
  
render() {   
   
        return (
            <section>
          <Navigation></Navigation>  
              <Home1></Home1>
              <Footer></Footer></section>
  
   
        )
    }
}

export default Home
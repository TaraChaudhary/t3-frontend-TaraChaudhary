import React from 'react'

import '../../containers/People/css/style.css'

import {Link, Redirect} from 'react-router-dom';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Home1 extends React.Component {
  
render() {   
   
        return (
            <section>
                 <div >
                  <h1>Welcome to</h1>
                <h2>Traffic Rules And Sign Quiz</h2>
         
            <div class="col-5 mx-auto " >
               
		<div class="img">
			<img src={require("../../containers/People/img/logo.jpg")}/>
		</div>
	             </div>  </div></section>
  
   
        )
    }
}

export default Home1
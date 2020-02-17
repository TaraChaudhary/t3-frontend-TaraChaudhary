import React from 'react'

import Navigation from '../Navigation'



class Profile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        user: null,
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        selectedFile: null,
    }
}


render(){
    return(
        <section>
       <Navigation></Navigation>
            <div class="card top">
                <img className='img-thumbnail'
                                    width='300' src={`http://localhost:5000/uploads/${localStorage.getItem('image')}`} alt="Profile"/>

<h1> {localStorage.getItem('firstname')}  {localStorage.getItem('lastname')} </h1>
<p class="title">{localStorage.getItem('email')}</p>
<p>Harvard University</p>

<p><button>{localStorage.getItem('username')}</button></p>


            <h2>{localStorage.getItem('phone')}</h2>
            
           </div>
         </section>
    )
}
}

export default Profile
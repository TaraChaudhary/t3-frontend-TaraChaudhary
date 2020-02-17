import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'

import SingleUser from './components/People/singleuser';
import UpdateSingleUser from './components/People/updateuser';
import SignUp from './containers/People/Signup';
import Login from './containers/People/Login';
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './components/People/Dashboard';
import People from './containers/People/People';
import AddCategory from './components/Category/addcategory';
import AddSign from './components/Signal/addsign';
import Viewcategory from './components/Category/viewcategory';
import EditCategory from './components/Category/editcategory';
import Profile from './components/Admin/profile';
import ViewSign from './components/Signal/viewsign';
import EditSign from './components/Signal/editsign';
import Adduser from './components/Admin/adduser';
import Home from './containers/People/Home';
import Home1 from './components/Admin/Adminhome';
import Listuser from './components/Admin/viewuser';



function App() {
  return (
    <BrowserRouter>


      <div className="App ">
   


        <Switch>
        <Route path="/home"component={Home1} />
        <Route path="/listuser"component={Listuser} />
          <Route path="/" exact component={Home} />
          <Route path="/singleuser/:id" component={SingleUser} />
          <Route path="/updatesingleuser/:id" component={UpdateSingleUser} />
          <Route path="/viewuser" component={People} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/adduser" component={Adduser} />
          <Route path="/addcategory" component={AddCategory} />
          <Route path="/listcategory" component={Viewcategory} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/editcategory/:id" component={EditCategory} />  
          <Route path="/profile" component={Profile} />  
          <Route path="/addsign" component={AddSign} />
          <Route path="/listsign" component={ViewSign} />
          <Route path="/editsign/:id" component={EditSign} />  
        </Switch>



      </div>
    </BrowserRouter>
  )
}

export default App;

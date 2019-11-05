import React from 'react';
import Home from  './commponents/home/Home'
import  Details from './commponents/details/Details'
import Login from './commponents/login/Login'

import {BrowserRouter as Router,Route} from "react-router-dom"




function App() {

  return (

    <div className="App">
      <Router >
            <Route exact path='/'  component={Home}/>
            <Route path='/home'  component={Home}/>
            <Route path='/details'  component={Details}/>
            <Route path='/login'  component={Login}/>


      </Router>

    </div>
  );
}

export default App;

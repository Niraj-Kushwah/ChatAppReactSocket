import React from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Room from './components/room/Room';
import Home from './components/home/Home';
import { BrowserRouter,HashRouter,MemoryRouter,Route, Switch } from 'react-router-dom';
import './App.css';
function App(props) {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
            <Switch>            
              <Route path="/" exact component={Home}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/room" exact component={Room}>
              </Route>   
            </Switch>    
        </BrowserRouter>  
      </div> 
  );
}

export default App;
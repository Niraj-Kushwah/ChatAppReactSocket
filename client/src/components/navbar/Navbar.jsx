import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
var logo = 'logochat.png';


class Navbar extends Component {

    logout=(event)=>{
      event.preventDefault()
      this.props.dispatch({
          type:"LOGOUT"
      })
      
  }

  render () {
    return (
      <nav class="navbar navbar-light">
        <div class="container-fluid">
           <Link className="navbar-brand" to="/"><img src={ logo }  alt="CmpnLogo" style={{ height: "75px",marginleft: "25px",width:"175px", }}></img></Link>
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxheight: "100px" }}>
            <li className="nav-item">
              <Link className="btn btn-warning" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="/room">Join Chat Room</Link>
            </li>
            {
              this.props.user ? 
              <span style={{ color:"white" }}>Welcome { this.props.user } </span>
              :""
            }
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-success" type="submit">Search</button>
          </form>
          {        
            this.props.loginstatus ? 
            <button className="btn btn-danger" onClick={this.logout}>Logout</button>  
            :<Link to="/login"><button className="btn btn-primary">Login</button></Link>
          }
        </div>
      </nav>
    );
  }
}
export default connect(function(state,props){
    return {

        user:state ?.user?.name,
        loginstatus:state?.isloggedin,
    }
})(Navbar)
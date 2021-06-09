import {useState,useEffect} from "react"
import axios from "axios"
import { Link ,withRouter} from "react-router-dom"

import { connect } from "react-redux";
function Login(props)
{

    useEffect(()=>{
       
    },[])
    
    var [errorMessage,setErrorMessage]=useState()
    var [user,setUser]=useState({})
    var [formerrors,setFormerrors]=useState({})

    let getEmail=(event)=>
    {
        setUser({
            ...user,
            email:event.target.value,
        })
        
        user.email = event.target.value
    }
    let getPassword=(event)=>
    {
        setUser({
            ...user,
            password:event.target.value,
        })
        
        user.password = event.target.value
    }

   var validate=function(elements)
   {
      var errors={}
      if(!elements.email.value)
      {
        errors.email="Email is Required"
      }
      if(!elements.password.value)
      {
        errors.password="Password is Required"
      }
      var errorkeys=Object.keys(errors)
      if(errorkeys.length>0)
        return errors
      else
        return false
   }

    let login = ()=>{
        var form=document.getElementById('loginform')         
        var errors=validate(form.elements)
        if(errors)
        {
            setFormerrors(errors)
        }else{
            props.dispatch({
                    type:"LOGIN",
                    payload:user
                })
        }       
    }
    
        return(
          <div style={{width:"50%" , margin:"auto"}} className="col-md-6">

              <h2> Login </h2>
          { props.isloginerror ? <div className="formerrors" style={{ color:"red" }}>Invalid Credentials</div> : null }    
            <form id="loginform">  
                <div className="form-group">
                    <label>Email</label>
                <input type="email" name="email" class="form-control" onChange={getEmail}></input>
                   { user && <label>{user.email}</label> }
                </div>
              {formerrors?.email && <div className="formerrors">{formerrors.email}</div>}  
                <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" class="form-control" onChange={getPassword}></input>
                   {user && <label>{user.password}</label> }
                </div>
              {formerrors?.password && <div className="formerrors">{formerrors.password}</div>}   
                <div style={{color:"red"}}>
                    {errorMessage}
                </div>
                <div style={{ float:"left"}}>
                  <Link to="/signup">New User! Click Here</Link>
                </div>
                
              { props.isloggedin ? props.history.push("/") : null }
                  
            </form>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        )
    
}

Login = withRouter(Login)
  export default connect(function(state,prop){
    return{
      isloggedin:state?.isloggedin, 
      isloginerror:state?.isloginerror,
    } 
})(Login)
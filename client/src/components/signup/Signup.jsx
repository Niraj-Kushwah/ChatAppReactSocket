import {Component} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
class Signup extends Component
{
	constructor()
	{
		super()
		this.state={
			onlineUsers:0
		}
	}
  componentDidMount()
  {
    //this.testfunction()
  }

  testfunction=(e)=>
  {
    alert("ho gya didmount");
  }
    user = {}
    
    getName=(event)=>
    {
        this.user.name = event.target.value
    }

    getEmail=(event)=>
    {
    	this.user.email = event.target.value
    }
    getPassword=(event)=>
    {
    	this.user.password = event.target.value
    }

    register = ()=>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage:"Please Fill Details"
            })
        }
        else{
           // this.setState({
           //     errorMessage:null
           // })
           let apiurl="https://apifromashus.herokuapp.com/api/register"
           axios({
                url:apiurl,
                method:"post",
                data:this.user
           }).then((response)=>{
              console.log("Response from signup api",response.data)
           },(error)=>{
              console.log("Error from signup api",error)  
           })
        }
        // console.log("...... user details" , this.user)
       
    }
    
	goOnline=()=>{
		console.log("......",this)
		this.setState({
			onlineUsers:this.state.onlineUsers+1
		})
	}

	render()
	{
		return(
			/* <div>
			   Hey Online Users {this.state.onlineUsers}
			   <input onChange={this.getEmail}></input>
			   <button onClick={this.goOnline}>Go Online</button>
			</div> */

			<div style={{width:"50%" , margin:"auto"}} className="col-md-6">
              <h2> Signup </h2>
                <div className="form-group">
                    <label>Name</label>
                <input type="text" class="form-control" onChange={this.getName}></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>

                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>

                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>

                <div style={{ float:"right"}}>
                  <Link to="/login">Already User! Click Here</Link>
                </div>
              <div style={{ paddingTop:"10px" }}>
                  <button className="btn btn-primary" onClick={this.register}>Register</button>
              </div>    
            </div>
		)
	}
}

export default Signup;
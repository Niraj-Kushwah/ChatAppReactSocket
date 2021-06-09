var demo= function(state={
    user:null
}, action){
    switch(action.type){

         case "LOGIN":{
            console.log("Here we have to write logic for login continue")
            state = {...state}
            return state
        }

        case "LOGIN_SUCCESS":{
            console.log("Here we have to write logic for login success")
            state = {...state}
            state["isloggedin"] =true
            state["isloginerror"] =false
            state["user"]="Neeraj"
            return state
        }

        case "LOGIN_FAILURE":{
            console.log("Here we have to write logic for failure")
            state = {...state}
            state["isloggedin"] =false
            state["isloginerror"] =true
            return state
        }
 
        case "LOGOUT":{            
            state = {...state}
            localStorage.clear()
            delete state["isloggedin"] 
            delete state["user"]
            return state
        }
        default :return state
    }
}
export default demo
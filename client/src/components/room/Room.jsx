import React, {useRef, useState, useEffect} from "react";
import {TextField, Button} from "@material-ui/core";
import useChat from "./useChatRoom"
import { connect } from "react-redux";
import { Redirect } from 'react-router';
function Room (props) {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = event => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyUp = event => {
    if (event.key === "Enter"){
      if (newMessage !== "") {
        sendMessage(newMessage);
        setNewMessage("");
      }
    }
  }

  return ( 
  <>  
  { props.loginstatus ?  
    <div className="container"> 
        <div className="mainchatdiv">
            {messages.map((message, i) => (
              <p key={i} className="chatshow">
              <span>{message.body}</span>
              </p>
            ))}
        </div>
        <div className="formclass">
          <TextField
            className="form-control"
            id="message"
            label="Message"
            placeholder="enter message here"
            variant="outlined"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyUp={handleKeyUp}
          />
          <Button
            disabled={!newMessage}
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            className="btn btn-success"
          >
            Send
          </Button>
        </div>   
    </div>
     : <Redirect to="/login" /> } 
    </>  
  );
};
export default connect(function(state,props){
    return {
        loginstatus:state?.isloggedin,
    }
})(Room)

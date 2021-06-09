import React, { Component } from 'react'
var homeimg='chat.jpg';
class Home extends Component {
  render () {
    return( 
      <div className="homeclass">
        <img src={homeimg} alt="..." width="1000px" height="500px" style={{ paddingTop:"10px" }}/>
      </div>
    );
  }
}
export default Home;
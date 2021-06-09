import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Footer extends Component {
  render () {
    return (
        <div className="footer">
            <span>
                © 2021 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap"> Neeraj.Kushwah@neosoftmail.com</a>
            </span>
        </div>
    );
  }
}
export default Footer;
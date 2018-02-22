import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <h4 className="footer-content">
         Total todos pending: 
         <span> {this.props.countProps.length}</span>
         </h4>
      </div>
    );
  }
}

export default Footer;
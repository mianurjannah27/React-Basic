import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) =>{
    const{ headerTitle} = props;
    return(
      <div className="header-top">
        
        <Link to="/" className="link">Home</Link>
        <Link to="/crud" className="link">Crud</Link>
        <Link to="/increment" className="link">Increment</Link>
        <h1>{headerTitle}</h1>
      </div>
    );
  };
  export default Header;
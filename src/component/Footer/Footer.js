import React from 'react';

const Footer = ({footerTitle}) =>{
   
    return(
      <div style={{position:"relative",bottom:"1px"}}>
        <h1>{footerTitle}</h1>
      </div>
    );
  };
  export default Footer;
import React, { useEffect } from 'react';

const ThreeDAuth = (Body) => {
  useEffect(()=> {
    // Create a new HTML document
    const newTab = window.open('', '_blank');

    // Set the content of the new page
    newTab.document.write(Body);

    // Close the document and focus on the new tab
    // newTab.document.close();
    newTab.focus();
  }, )
    // const { Body } = this.props;

    // Create a new HTML document
    // const newTab = window.open('', '_blank');

    // Set the content of the new page
    // newTab.document.write(Body);

    // Close the document and focus on the new tab
    // newTab.document.close();
    // newTab.focus();
  

  
    return( <div>Redirecting...</div>)
  
}

export default  ThreeDAuth;
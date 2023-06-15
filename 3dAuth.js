import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ThreeDAuth = () => {
  const location = useLocation();
  // console.log(location.state);
  //   let form = useRef();

  useEffect(() => {
   
    // var holder = document.getElementById("holder");

    // if (holder !== undefined && holder !== null) {
    //   // var full = location.state;
    //   var first = location.state;
    //   var holder = document.getElementById("holder");
    //   holder.innerHTML = first;
    //   var s = document.createElement("script");
    //   s.type = "text/javascript";
    //   s.text = `var from = document.getElementById("formId");from.submit();`;
    //   console.log(holder);
    //   holder.append(s);
    // }

    // console.log(append);
    // var newTab = window.open('', '_blank');

    // Set the content of the new page
    // newTab.document.write(`${ location.state}`);

    // Close the document and focus on the new tab
    // newTab.document.close();
    // newTab.focus()
  });

  return (
    <div>
      <div id="holder"></div>
      
      <div id="formScript">
        {/* <script>
          var from = document.getElementById("formId"); from.submit();
        </script> */}
      </div>
    </div>
  );
};

export default ThreeDAuth;

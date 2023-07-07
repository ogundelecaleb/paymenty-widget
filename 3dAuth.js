// import React from 'react'

// const 3dAuth = () => {
//   return (
    
//   )
// }

// export default 3dAuth




// // import * as CryptoJS from "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js";
// const PaylodeCheckout = {
//   records: undefined,
//   onCloseCallback: undefined,
//   onSuccessCallback: undefined,
//   setup: function (data) {
//     // Create the payment modal iframe
//     records = data;
//     var origin = window.origin;
//     console.log("user:", origin);

//     this.onSuccessCallback = data.onSuccess;
//     this.onCloseCallback = data.onClose;
//     console.log(records);
//     return this;
//   },

//   openIframe: function () {
//     const secret = "my-secret";
//     const closewidgetString = this.closewidget
//       ? this.closewidget.toString()
//       : "";
//     const onCloseCallbackStr = this.onCloseCallback
//       ? this.onCloseCallback.toString()
//       : "";
//     var onSuccessCallbackStr = this.onSuccessCallback
//       ? this.onSuccessCallback.toString()
//       : "";

//     // var key = "1";
//     // const encryptedCallbackUrl = this.encrypt(onCloseCallbackStr, key);

//     // const encryptedString = encrypt(onCloseCallbackStr, secret);
//     // Create a loader element
//     var loader = document.createElement("div");
//     loader.style.display = "flex";
//     loader.style.justifyContent = "center";
//     loader.style.alignItems = "center";
//     loader.style.width = "100%";
//     loader.style.height = "100vh";
//     loader.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
//     loader.style.position = "fixed";
//     loader.style.top = "0";
//     loader.style.left = "0";
//     loader.style.zIndex = "9999";

//     // Create a spinner element
//     var spinner = document.createElement("div");
//     spinner.className = "spinner";
//     spinner.style.border = "16px solid #f3f3f3";
//     spinner.style.borderTop = "16px solid #3498db";
//     spinner.style.borderRadius = "50%";
//     spinner.style.width = "120px";
//     spinner.style.height = "120px";
//     // spinner.style.animation = "spin 2s linear infinite";
//     spinner.style.background = `#000
//     url ${"https://media.giphy.com/media/8agqybiK5LW8qrG3vJ/giphy.gif"} center
//     no-repeat`;

//     // Append the spinner to the loader
//     loader.appendChild(spinner);

//     //get user url origin
//     var origin = window.origin;
//     console.log("user:", origin);

//     // Append the loader to the body
//     document.body.appendChild(loader);

//     var iframe = document.createElement("iframe");
//     iframe.setAttribute("id", "iframeId");
//     iframe.src = `https://paymentgateway.paylodeservices.com/?publicKey=${encodeURIComponent(
//       records.publicKey
//     )}&amount=${encodeURIComponent(
//       records.amount
//     )}&redirectUrl=${encodeURIComponent(
//       records.redirectUrl
//     )}&phonenumber=${encodeURIComponent(
//       records.phonenumber
//     )}&lastname=${encodeURIComponent(
//       records.lastname
//     )}&firstname=${encodeURIComponent(records.firstname)}
//     &currency=${encodeURIComponent(
//       records.currency
//     )}&email=${encodeURIComponent(
//       records.email
//     )}&onCloseCallback=${encodeURIComponent(
//       onCloseCallbackStr
//     )}&onSuccessCallback=${encodeURIComponent(
//       onSuccessCallbackStr
//     )}&closewidget=${encodeURIComponent(closewidgetString)}`;
//     iframe.style.border = "none";
//     iframe.style.width = "100%";
//     iframe.style.height = "100vh";
//     iframe.style.position = "fixed";
//     iframe.style.top = "0";
//     iframe.style.left = "0";
//     // iframe.onload = '<!DOCTYPE html><p style="color: green;">Loading...</p>';
//     iframe.style.zIndex = "9999";

//     // Wait for the iframe to load
//     iframe.addEventListener("load", function () {
//       // Remove the loader once the iframe has loaded
//       document.body.removeChild(loader);
//     });
//     // this.closewidget(iframe)
//     // Append the iframe to the body
//     document.body.appendChild(iframe);

//     // Listen for messages from the iframe
//     window.addEventListener("message", this.receiveMessage.bind(this), false);
//   },
//   closewidget: function () {
//     // var iframeId = document.getElementByTagNam("iframeId");
//     // console.log("checkoutWindow:", window.location.reload());

//     // window.top.postMessage("close-iframe", "*");

    

//     // console.log("checkoutDocument", document.parentNode);
//     // console.log("checkoutparent", parent.docume);
//     // document.element.style.width = "0"

//     // console.log("iframe:", iframeId);

//     // iframeId.parentNode.removeChild(iframeId);

//     // console.log("widget:", document.getElementsByTagName("iframe"));
//   },

//   // encrypt: function (onCloseCallbackStr, key) {

//   //   const text = encodeURIComponent(onCloseCallbackStr);
//   //   const encrypted = CryptoJS.AES.encrypt(text, key);
//   //   return encrypted;
//   // },
//   receiveMessage: function (event) {
//     // Check if the message is from the iframe and contains the expected data
//     if (
//       typeof this.onCloseCallback === "function" ||
//       typeof this.onSuccessCallback === "function"
//     ) {
//       // Call the onClose callback function with the desired return values
//       this.onCloseCallback(event.data.data);
//       this.onSuccessCallback(event.data.data);
//       // Remove the iframe from the body
//       // document.body.removeChild(event.source.frameElement);
//     }
//   },
// };

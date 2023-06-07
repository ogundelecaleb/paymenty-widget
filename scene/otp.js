import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate } from "react-router-dom";


const Otp = () => {

    const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  return (
    <div className="py-5  px-[20px]">
      <h3 className="text-[24px] text-[#1a202c]  font-bold pb-1">
        Validate OTP
      </h3>
      <p className="text-[#718096] text-md mb-5">
        We have sent code to your email
      </p>

      <OTPInput
        className="py-7"
        value={otp}
        onChange={setOtp}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
        secure
        inputStyles={{
          padding: "1px",
          width: "28px",
          height: "28px",
          borderRadius: "5px",
          border: "1px solid #1a202c",
          margin: "0 auto"
        }}
      />
      <ResendOTP handelResendClick={() => console.log("Resend clicked")} />

      <button
        type="button"
        onClick={() => navigate("/index/success")}
        class="py-[9px] items-center rounded-[20px] w-full my-[15px] bg-[#124072] text-[#ffffff] text-[16px] leading-[24px] tracking-[0.2px] font-bold flex justify-center "
      >
        Validate OTP{" "}
        {/* {isLoading && (
        <svg
          class="ml-4 w-6 h-6 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )} */}
      </button>
    </div>
  );
};

export default Otp;




// import "./CardDetails.css";

// import React, { useState } from "react";
// export default function CardDetails() {
//   const [card, setCard] = useState({
//     cardno: "",
//     cardtype: "far fa-credit-card",
//     expirydt: ""
//   });

//   const onChange = (e) => {
//     var cartype_new = cardnumber(e.target.value);
//     setCard({
//       ...card,
//       cardno: e.target.value,
//       cardtype: cartype_new
//     });
//   };
//   const cardnumber = (inputtxt) => {
//     var matches = inputtxt.match(/(\d+)/);
//     var cardno = "";
//     console.log(matches);
//     if (matches) {
//       cardno = inputtxt.split(" - ").join("");
//     }
//     console.log(cardno);
//     var cardtype1 = card.cardtype;
//     //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
//     var visa = /^(?:4[0-9]{2}?)$/;
//     var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
//     var amexpRegEx = /^(?:3[47][0-9]{3})$/;
//     var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
//     console.log(visa.test(cardno));
//     if (visa.test(cardno) === true) {
//       //eg:4651970022334445
//       cardtype1 = "far fa fa-3x fa-cc-visa  carddetail-cardtype";
//     } else if (mastercardRegEx.test(cardno) === true) {
//       cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
//     } else if (amexpRegEx.test(cardno) === true) {
//       cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
//     } else if (discovRegEx.test(cardno) === true) {
//       cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
//     }
//     return cardtype1;
//   };

//   const cc_format = (value) => {
//     const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

//     const parts = [];
//     for (let i = 0; i < v.length; i += 4) {
//       parts.push(v.substr(i, 4));
//     }
//     return parts.length > 1 ? parts.join("-") : value;
//   };

//   const expriy_format = (value) => {
//     const expdate = value;
//     const expDateFormatter =
//       expdate.replace(/\//g, "").substring(0, 2) +
//       (expdate.length > 2 ? "/" : "") +
//       expdate.replace(/\//g, "").substring(2, 4);

//     return expDateFormatter;
//   };

//   const onChangeExp = (e) => {
//     setCard({
//       ...card,
//       expirydt: e.target.value
//     });
//   };

//   return (
//     <>
//       <div className="cardetails-wrapper">
//         <div className="cardetails-payment">
//           <h2 className="carddetails-head">Card Details</h2>

//           <div className="cardetails-form">
//             <div className="cardetails-card cardetails-space cardetails-icon-relative">
//               <label className="cardetails-label">Card Number:</label>
//               <input
//                 type="text"
//                 className="cardetails-input"
//                 data-mask="0000 0000 0000 0000"
//                 placeholder="XXXX-XXXX-XXXX-XXXX"
//                 value={cc_format(card.cardno)}
//                 onChange={onChange}
//                 onKeyPress={(event) => {
//                   if (!/[0-9]/.test(event.key)) {
//                     event.preventDefault();
//                   }
//                 }}
//               />
//               <i className={card.cardtype} id="cardtype"></i>
//             </div>

//             <div className="cardetails-card-grp cardetails-space">
//               <div className="cardetails-card-item cardetails-icon-relative">
//                 <label className="cardetails-label">Expiry date:</label>

//                 <input
//                   type="text"
//                   name="expiry-data"
//                   className="cardetails-input"
//                   placeholder="mm / yy"
//                   onChange={onChangeExp}
//                   value={expriy_format(card.expirydt)}
//                 />
//                 <i className="far fa-calendar-alt"></i>
//               </div>
//               <div className="cardetails-card-item cardetails-icon-relative">
//                 <label className="cardetails-label">Cvv:</label>
//                 <input
//                   type="password"
//                   className="cardetails-input"
//                   // data-mask="000"
//                   placeholder="000"
//                   maxlength="3"
//                   pattern="[0-9][0-9][0-9]"
//                   onKeyPress={(event) => {
//                     if (!/[0-9]/.test(event.key)) {
//                       event.preventDefault();
//                     }
//                   }}
//                 />
//                 <i className="fas fa-lock"></i>
//               </div>
//             </div>
//             <div className="cardetails-card cardetails-space cardetails-icon-relative">
//               <label className="cardetails-label">Name on Card:</label>
//               <input type="text" className="cardetails-input" placeholder="" />
//               <i className="fas fa-user"></i>
//             </div>
//             <div className="cardetails-btn">Pay</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

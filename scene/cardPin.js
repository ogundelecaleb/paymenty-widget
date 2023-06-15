import React, { useState, useEffect } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useNavigate, useLocation, useOutletContext } from "react-router-dom";

const CardPin = () => {
  const location = useLocation();
  const [
    successCallbackStr,
    publicKey,
    sessionRef,
    currency,
    amount,
    BaseApiUrl,
    email,
    firstName,
    lastName,
    phoneNumber,
  ] = useOutletContext();
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [transactionStat, setTransactionStat] = useState("");

  useEffect(() => {
    console.log("otp:", otp);
    console.log(transactionStat);
  });

  async function handleOtp(e) {
    e.preventDefault();
    const response = await fetch(`${BaseApiUrl}/payment/validate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Public-Key": publicKey,
      },
      body: JSON.stringify({
        otp: otp,
        transactionReference: location.state,
      }),
    });
    const data = await response.json(); //
    if (data?.data && data?.data.transactionStatus === "Success") {
      console.log(data?.data?.transactionStatus);
      navigate("/success");
      console.log("otpsuccessful");
    } else if (
      !data.isSuccessful ||
      data?.data.transactionStatus === "Failed"
    ) {
      navigate("/index/failed");
      console.log("error message:", data.message || data.title || "");
    }
  }

  return (
    <div className="py-5  px-[20px]">
      <h3 className="text-[20px] text-[#1a202c]  font-bold pb-1">
        Input Card Pin
      </h3>
      <p className="text-[#718096] text-sm mb-5">put in your card pin here</p>
      <div>
        {" "}
        <input
          id="c_number"
          type="password"
          className="block w-full px-4 py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
          placeholder="****"
          autofocus
          required
          value={pin}
          onChange={() => {setPin()}}
        />
      </div>
      <button
        type="button"
        onClick={handleOtp}
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

export default CardPin;

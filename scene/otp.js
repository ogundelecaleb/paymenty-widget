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

import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";


const FailedTransaction = () => {
  const  [origin, setOrigin] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");

console.log("params:",   params)
    setOrigin(url)
  })
  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          //  onClick={onClose}
          className="fixed inset-0 transition-opacity bg-[#29292980] "
          aria-hidden="true"
        >
          {" "}
        </div>
        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block py-[20px] px-[40px] relative overflow-hidden text-left align-bottom transition-all transform bg-[white] rounded-xl shadow-xl sm:my-8 sm:align-middle sm:max-w-[28rem] sm:w-full">
          <h3 className="text-[20px] text-[#1a202c] text-center  font-bold pb-1">
            Transaction Failed !!
          </h3>
          <p className="text-[#718096] text-center text-sm mb-5">Try Again!</p>
          <div className="mx-auto my-8">
           <img src="/failed.svg" alt="failed" className="h-[40px] w-[40px] mx-auto"/>
          </div>


          <Link to={`${origin}`}>
          <button
            type="button"
            //   onClick={validtaeOtp}
            class="py-[9px] mx-auto rounded-[16px] w-full md:w-[60%] my-[15px] bg-[#124072] text-[#ffffff] text-[14px] leading-[24px] tracking-[0.2px] flex justify-center "
          >
            Go Back To Page{" "}
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
          </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FailedTransaction;

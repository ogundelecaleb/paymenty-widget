import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Failed = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");

    setOrigin(url);
  });

  return (
    <div className="py-5 w-full px-[20px]">
      <h3 className="text-[20px] text-gray-500 text-center  font-bold pb-1">
        Transaction Failed !!
      </h3>
     
      <div className="mx-auto my-8">
        <img
          src="/failed.svg"
          alt="failed"
          className="h-[40px] w-[40px] mx-auto"
        />
      </div>


      <button
          type="button"
          onClick={() => navigate("/")}
          class="py-[9px] mx-auto rounded-[14px] w-full md:w-[60%] my-[15px] bg-[#124072] text-[#ffffff] text-[14px] leading-[24px] tracking-[0.2px] flex justify-center "
        >
          Try with another card{" "}
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
      <Link to={`${origin}`}>
        <button
          type="button"
          // onClick={() => navigate("/")}
          class="py-[9px] mx-auto rounded-[14px] w-full md:w-[60%] my-[15px] bg-[#124072] text-[#ffffff] text-[14px] leading-[24px] tracking-[0.2px] flex justify-center "
        >
          Go back to page{" "}
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
  );
};

export default Failed;

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Successfull = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");

    setOrigin(url);
  });

  return (
    <div className="py-5 w-full px-[16px] md:px-[20px]">
      <h3 className="text-[20px] text-gray-500 text-center  font-bold pb-1">
        Transaction Successful
      </h3>
      <p className="text-[#718096] text-center text-sm mb-5"></p>
      <div className="mx-auto my-8">
        <svg
          className="mx-auto"
          width="40"
          height="40"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M231.134 104.135L215.204 84.3696C212.696 81.1245 211.074 77.2896 210.631 73.0121L207.829 47.937C207.26 42.9301 205.01 38.264 201.447 34.7008C197.884 31.1376 193.218 28.8881 188.211 28.3195L163.136 25.5171C158.711 25.0746 154.876 23.1571 151.631 20.6496L131.866 4.71955C123.754 -1.77045 112.249 -1.77045 104.136 4.71955L84.371 20.6496C81.126 23.1571 77.291 24.7796 73.0135 25.2221L47.9385 28.0246C37.6135 29.2046 29.501 37.3171 28.321 47.6421L25.5185 72.717C25.076 77.1421 23.1585 80.9771 20.651 84.2221L4.72102 103.987C-1.76898 112.1 -1.76898 123.605 4.72102 131.717L20.651 151.482C23.1585 154.727 24.781 158.562 25.2235 162.84L28.026 187.915C29.206 198.24 37.3185 206.352 47.6435 207.532L72.7185 210.335C77.1435 210.777 80.9785 212.695 84.2235 215.202L103.989 231.132C112.101 237.622 123.606 237.622 131.719 231.132L151.484 215.202C154.729 212.695 158.564 211.072 162.841 210.63L187.916 207.827C198.241 206.647 206.354 198.535 207.534 188.21L210.336 163.135C210.779 158.71 212.696 154.875 215.204 151.63L231.134 131.865C237.624 123.752 237.624 112.247 231.134 104.135ZM95.876 177L44.251 125.375L66.376 103.25L95.876 132.75L169.626 58.9996L191.751 81.8621L95.876 177Z"
            fill="#90c841"
          />
        </svg>
      </div>

      <Link to={`${origin}`}>
        <button
          type="button"
          // onClick={() => navigate("/")}
          class="py-[9px] mx-auto rounded-[16px] w-full md:w-[60%] my-[15px] bg-[#124072] text-[#ffffff] text-[14px] leading-[24px] tracking-[0.2px] flex justify-center "
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

export default Successfull;

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
    redirectUrl,
  ] = useOutletContext();
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionRef, setTransactionRef] = useState("");

  useEffect(() => {});

  async function handlePin(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${BaseApiUrl}/payment/charge`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Public-Key": publicKey,
      },
      body: JSON.stringify({
        clientReference: "",
        currencyCode: currency,
        sessionReference: sessionRef,
        channel: "Card",
        amount: amount,
        chargeParameters: {
          CardNumber: location.state.unpartCardNumber,
          ExpiryMonth: location.state.month,
          ExpiryYear: location.state.year,
          CardCvv: location.state.cvv,
          CardPin: pin,
        },
        customerInformation: {
          email: email,
          phoneNumber: phoneNumber,
          firstName: firstName,
          lastName: lastName,
        },

        redirectUrl: redirectUrl,
      }),
    });
    const data = await response.json(); //
    if (data.isSuccessful && data.data) {
      setTransactionRef(data?.data?.transactionReference);
      if (data.data.details?.FormData?.Body !== undefined) {
        console.log(data.data.details?.FormData.Body);
        // Create a new HTML document
        let stringedBody = data?.data?.details?.FormData?.Body;
        stringedBody = stringedBody.toString() || "Hello";
        var closeFunc = window["closeWidget"];
        const newTab = window.open("", "_blank");

        //call the close widget function stored in the windows
        window["closeWidget"] = "closeFunc";

        // window.focus();
        console.log(window);
        // Set the content of the new page
        if (newTab != null) {
          newTab.document
            .write(`<html ><head><title>Document</title></head><body>${stringedBody}<script>
            var from = document.getElementById("formId");
            from.submit();
        </script></body></html>`);

          // Close the document and focus on the new tab
          newTab.document.close();
          newTab.focus();
          console.log(newTab);
        }
      } else if (data.data?.details?.IsAuthRequired) {
        navigate("/index/otp", { state: data?.data?.transactionReference });
      } else if (
        data.data?.details?.IsAuthRequired === false &&
        data.data?.details?.status === "Processing"
      ) {
        console.log(data?.data?.transactionReference);


        fetch(`${BaseApiUrl}/payment/status?transactionReference=${data?.data?.transactionReference}&clientReference=${data?.data?.clientReference}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Public-Key": publicKey,
          },
          // params: {
          //   TransactionReference: data?.data?.transactionReference,
          // },
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.data?.transactionStatus === "Success") {
              navigate("/index/success", {
                
              });
            } else if  (res.data?.transactionStatus === "Failed") {
              navigate("/index/failed", {
                
              });
            }
          });
      } else if (
        data.data?.details?.IsAuthRequired === false &&
        data.data?.details?.ProviderMessage === "success"
      ) {
        navigate("/index/success", {
          state: data?.data?.details?.ProviderMessage,
        });
      }
      setLoading(false);
      console.log("CHARGEsuccessful");
    } else {
      setLoading(false);
      console.log("error message: not successful");
      navigate("/index/failed");
    }
  }

  return (
    <div className="py-5 w-full px-[20px]">
      <h3 className="text-[20px] text-gray-500 text-center font-bold pb-1">
        Input Card Pin
      </h3>
      <p className="text-[#718096] text-sm mb-5 text-center">
        Put in card pin here
      </p>

      <form onSubmit={handlePin}>
        <div className="mx-auto my-4 sm:my-[48px] md:my-[48px]">
          {" "}
          <input
            id="pin"
            type="password"
            className="block mx-auto w-[78px] text-center px-4 py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
            placeholder="****"
            autoFocus
            required
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          // onClick={handleOtp}
          class="py-[9px] items-center rounded-[16px] w-full mt-[20px] bg-[#124072] text-[#ffffff] text-[16px] leading-[24px] tracking-[0.2px] font-bold flex justify-center "
        >
          Submit{" "}
          {loading && (
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
          )}
        </button>
      </form>
    </div>
  );
};

export default CardPin;

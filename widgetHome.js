import React, { useEffect, useState } from "react";
import SideBar from "./component/sideBar";
import Modal from "./component/Modal";
import { Outlet } from "react-router-dom";

const WidgetHome = () => {
  const BaseApiUrl = "http://94.229.79.27:39213/v1";
  // const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [callbackStr, setCallbackStr] = useState(null);
  const [successCallbackStr, setSuccessCallbackStr] = useState(null);
  const [currency, setCurrency] = useState("");
  const [merchantLogo, setMerchantLogo] = useState("")
  const [merchantName, setMerchantName] = useState("")
  const [sessionRef,setSessionRef] = useState("")
  const [channel, setChannel] = useState("")

  useEffect(() => {
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const publicKey = params.get("publicKey");
    const secretKey = params.get("secretKey");
    const amount = params.get("amount");
    const currency = params.get("currency");
    var onCloseCallbackStr = params.get("onCloseCallback");
    const onSuccessCallbackStr = params.get("onSuccessCallback");
    
    console.log(amount)
console.log(merchantName)
    console.log(sessionRef)
    console.log("channel:", channel)

    /*eslint no-new-func: 0*/
    setCallbackStr(onCloseCallbackStr);
    setSuccessCallbackStr(onSuccessCallbackStr);

    // Process the payment using the retrieved details

    processPayment({ publicKey, secretKey, amount, currency });
  }, []);
  const onCloseCallback = new Function(`return (${callbackStr})`)();

  const handleCloseModal = () => {
    setIsOpen(false);

    if (typeof onCloseCallback === "function") {
      onCloseCallback({ status: "closed" });
    }
  };

  const processPayment = ({ publicKey, secretKey, currency, amount }) => {
    // You can use payment APIs or any other payment processing methods here
    console.log(amount);
    fetch(`${BaseApiUrl}/payment/initiate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Public-Key": publicKey ,
      },
      body: JSON.stringify({ currencyCode: currency }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.isSuccessful && res.data) {
          setSessionRef(res.data.sessionReference)
          setCurrency(res.data.currency)
          setMerchantLogo(res.data.merchantLogo)
          setMerchantName(res.data.merchantName)
          setChannel(res.data.channels)
          console.log("initiatesuccessful");
        } else if (!res.isSuccessful) {
          console.log("error message:", res.message || res.title || "");
        }
      });

    // Example code to log the payment detail
    console.log("Payment details:");
    console.log("Public Key:", publicKey);
    console.log("Secret Key:", secretKey);
    console.log("Amount:", amount);
    console.log("Currency:", currency);
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="inline-block relative overflow-hidden text-left align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <svg
            onClick={handleCloseModal}
            className="cursor-pointer absolute right-1 top-2 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9497 7.05032L7.05021 16.9498"
              stroke="#171717"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.05029 7.05032L16.9498 16.9498"
              stroke="#171717"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className=" md:mt-0 md:col-span-2">
            <div className="flex">
              <SideBar />
              <Outlet context={[successCallbackStr]} />
            </div>{" "}
          </div>
        </div>
      </Modal>
      
    </div>
  );
};

export default WidgetHome;

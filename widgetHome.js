import React, { useEffect, useState } from "react";
import SideBar from "./component/sideBar";
// import { encrypt, decrypt, compare } from "n-krypta";
import Modal from "./component/Modal";
import { Outlet } from "react-router-dom";

const WidgetHome = () => {
  const BaseApiUrl = "https://paymentgatewayapi.paylodeservices.com/v1";
  const [amount, setAmount] = useState("200");
  const [isOpen, setIsOpen] = useState(true);
  const [callbackStr, setCallbackStr] = useState(null);
  const [email, setEmail] = useState(null);
  const [successCallbackStr, setSuccessCallbackStr] = useState(null);
  const [currency, setCurrency] = useState("");
  const [merchantLogo, setMerchantLogo] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const [sessionRef, setSessionRef] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [closewidgetStr, setClosewidgetStr] = useState("");
  const [redirectUrl, setredirectUrl] = useState("");

  useEffect(() => {
    // Grab the URL parameters
    const params = new URLSearchParams(window.location.search);
    const publicKey = params.get("publicKey");
    const secretKey = params.get("secretKey");
    const amount = params.get("amount");
    const firstname = params.get("firstname");
    const lastname = params.get("lastname");
    const phonenumber = params.get("phonenumber");
    const currency = params.get("currency");
    const email = params.get("email");
    const redirectUrl = params.get("redirectUrl");
    var onCloseCallbackStr = params.get("onCloseCallback");
    var closewidgetStr = params.get("closewidget");
    const onSuccessCallbackStr = params.get("onSuccessCallback");

    console.log(params);

    setEmail(email);
    setAmount(amount);
    setFirstName(firstname);
    setLastName(lastname);
    setPhoneNumber(phonenumber);
    setCurrency(currency);
    setredirectUrl(redirectUrl);

    // const secret = "my-secret";
    // const decryptedString = decrypt(onCloseCallbackStr, secret);
    /*eslint no-new-func: 0*/
    setCallbackStr(onCloseCallbackStr);
    setClosewidgetStr(closewidgetStr);
    setSuccessCallbackStr(onSuccessCallbackStr);
    setPublicKey(publicKey);

    // Process the payment using the retrieved details
    window["closeWidget"] = closeWidget;
    // window.globalThis = {
    //   "another": closeWidget
    // }

    processPayment({ publicKey, secretKey, amount, currency });
  }, [publicKey]);

  const onCloseCallback = new Function(`return (${callbackStr})`)();

  function handleCloseModal() {
    setIsOpen(false);
    const closeWidget = new Function(`return (${closewidgetStr})`)();
    if (typeof onCloseCallback === "function") {
      onCloseCallback({ status: "closed" });
    }
    if (typeof closeWidget === "function") {
      closeWidget({ status: "closed" });
    }
  }
  const closeWidget = function () {
    setIsOpen(false);
  };

  const processPayment = ({ publicKey, secretKey, currency, amount }) => {
    // You can use payment APIs or any other payment processing methods here
    console.log(amount);
    fetch(`${BaseApiUrl}/payment/initiate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Public-Key": publicKey,
      },
      body: JSON.stringify({ currencyCode: currency }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.isSuccessful && res.data) {
          setSessionRef(res.data.sessionReference);
          setCurrency(res.data.currency);
          setMerchantLogo(res.data.merchantLogo);
          setMerchantName(res.data.merchantName);

          console.log("initiatesuccessful");
        } else if (!res.isSuccessful) {
          console.log("error message:", res.message || res.title || "");
        }
      });
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="inline-block relative overflow-hidden text-left align-bottom transition-all transform bg-[white]  shadow-xl sm:my-8 sm:align-middle sm:max-w-[28rem] sm:w-full">
          <svg
            onClick={handleCloseModal}
            className="cursor-pointer absolute right-1 top-2 "
            width="20"
            height="20"
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

          <div className=" md:mt-0 w-full">
            <div className="flex w-full">
              <SideBar />
              <Outlet
                context={[
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
                ]}
              />
            </div>{" "}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WidgetHome;

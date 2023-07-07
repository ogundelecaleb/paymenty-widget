import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CardDetails = () => {
  const navigate = useNavigate();
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
  const [cardNumber, setCardNumber] = useState("");
  const [transactionRef, setTransactionRef] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cvvErrorMessage, setCvvErrorMessage] = useState("");
  const [cvv, setCvv] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiry, setExpiry] = useState("");
  const [unpartCardNumber, setUnpartCardNumber] = useState("");
  const [loading, setLoaading] = useState(false);

  /*eslint no-unused-vars: 0*/
  /*eslint no-useless-escape: 0*/
  /*eslint no-new-func: 0*/
  const onCloseCallback = new Function(`return (${successCallbackStr})`)();

  useEffect(() => {
    console.log("currency:", currency);
    splitExpry();
  });

  const splitExpry = () => {
    const mm = expiry.substring(0, 2);
    const yy = expiry.substring(3, 5);
    setMonth(mm);
    setYear(yy);
  };

  function handleCardNumber(event) {
    let new_cardNumber = event.target.value;
    setCardNumber(new_cardNumber);
    var specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    if (new_cardNumber.match(specialCharRegExp)) {
      setTimeout(function () {
        setErrorMessage("*invalid card number");
      }, 5000);
    } else if (new_cardNumber.length === 0) {
      setErrorMessage("");
    } else if (new_cardNumber.length > 2 && !cardType) {
      setTimeout(function () {
        setErrorMessage("*invalid card number");
      }, 5000);
    } else {
      setErrorMessage("");
    }
    var code = event.which ? event.which : event.keyCode;
    if ((code < 48 || code > 57) && code > 31) {
      return false;
    }

    var v = new_cardNumber.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,19}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];
    setUnpartCardNumber(v);

    // if (new_cardNumber.length < 1) {
    //   setVisa(false);
    //   setVerve(false);
    //   setMastercard(false);
    // }
    const masterFormat = [
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "51",
      "52",
      "54",
      "53",
      "55",
      "60",
      "63",
      "67",
      "97",
    ];
    const xx = new_cardNumber.substring(0, 2);
    if (masterFormat.indexOf(xx) > -1) {
      setCardType("master");
    } else if (new_cardNumber.length > 0 && new_cardNumber[0] === "4") {
      setCardType("visa");
    } else if (v.length > 6) {
      const first6CardDigit = Number(v.substring(0, 6));
      var r1 = 506099;
      var r2 = 506198;
      var r3 = 650002;
      var r4 = 650027;
      var r5 = 507865;
      var r6 = 507964;
      if (
        (first6CardDigit >= r1 && first6CardDigit <= r2) ||
        (first6CardDigit >= r3 && first6CardDigit <= r4) ||
        (first6CardDigit >= r5 && first6CardDigit <= r6) ||
        first6CardDigit === 628051
      ) {
        setCardType("verve");
      } else {
        setCardType("");
      }
    }
    var i;
    var len;
    for (i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      document.getElementById("c_number").value = parts.join(" ");
      return;
    } else {
      return new_cardNumber;
    }
  }

  const currencyMap = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
  };

  // function handleCvv(event) {
  //   let new_cvv = event.target.value;
  //   setCvv(new_cvv);

  //   var specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  //   if (new_cvv.match(specialCharRegExp)) {
  //     setCvvErrorMessage("CVV should not contains special character");
  //   } else if (new_cvv.length < 3) {
  //     setCvvErrorMessage("CVV must be 3 digit..");
  //   } else {
  //     setErrorMessage("");
  //   }
  // }

  //handle expiry format
  const expriy_format = (value) => {
    const expdate = value;

    const expDateFormatter = expdate
      .replace(
        /^([1-9]\/|[2-9])$/g,
        "0$1/" // To handle 3/ > 03/
      )
      .replace(
        /^(0[1-9]{1}|1[0-2]{1})$/g,
        "$1/" // 11 > 11/
      )
      .replace(
        /^([0-1]{1})([3-9]{1})$/g,
        "0$1/$2" // 13 > 01/3
      )
      .replace(
        /^(\d)\/(\d\d)$/g,
        "0$1/$2" // To handle 1/11 > 01/11
      )
      .replace(
        /^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g,
        "$1/$2" // 141 > 01/41
      )
      .replace(
        /^([0]{1,})\/|[0]{1,}$/g,
        "0" // To handle 0/ > 0 and 00 > 0
      )
      .replace(
        /[^\d\/]|^[\/]{0,}$/g,
        "" // To allow only numbers and /
      )
      .replace(
        /\/\//g,
        "/" // Prevent entering more than 1 /
      );
    // const expDateFormatter =
    //   expdate.replace(/\//g, "").substring(0, 2) +
    //   (expdate.length > 2 ? "/" : "") +
    //   expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  const onChangeExp = (e) => {
    setExpiry(e.target.value);
  };

  // function handlePayment() {
  //   navigate("/index/otp");
  //   if (typeof onCloseCallback === "function") {
  //     onCloseCallback({ status: "This is success message" });
  //   }
  // }

  //hnadle cvv input
  function handlecvv(e) {
    let value = e.target.value;
    setCvv(value);
    if (value.toString().length > 2) {
      return false;
    } else {
      var v = value.replace(
        /[^0-9]/g,
        "" // To allow only numbers
      );
      value = v;
    }
  }
  return (
    <div className="py-5  px-[20px]">
      <div className="text-right text-[10px] pr-3 mt-2">
        <p>{email}</p>
        <p>
          Pay{" "}
          <span className="font-bold text-[#124072]">
            {/* {currencyMap[currency]?? currencyMap["NGN"]} */}
            {currency === "NGN" ? "₦" : currency === "USD" ? "$" : ""}
            {amount}
          </span>{" "}
        </p>
      </div>

      <form
        onSubmit={() => {
          navigate("/index/cardpin", {
            state: {
              unpartCardNumber: unpartCardNumber,
              month: month,
              year: "20" + year,
              cvv: cvv,
            },
          });
        }}
      >
        <div className="overflow-hidden  sm:rounded-md">
          <div className="container mt-[30px]">
            <p className="text-[#718096]  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
              Card Number
            </p>
            <div className="relative">
              <input
                id="c_number"
                type="tel"
                className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                placeholder="0000 0000 0000 0000"
                autoFocus
                required
                // value={cardNumber}
                onChange={handleCardNumber}
              />

              <div className="absolute right-1 -translate-y-[90%] h-[36px]">
                {cardType && cardType === "master" ? (
                  <img
                    src="../mastercard.png"
                    alt=""
                    className="h-[25px] object-contain"
                  />
                ) : cardType === "verve" ? (
                  <img src="../verve.png" alt="" className=" object-contain" />
                ) : cardType === "visa" ? (
                  <img src="../visa.png" alt="" className=" object-contain" />
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* 
            <p className="text-xs trackin text-orange-400 leading-[24px] tracking-[0.3px] px-2">
              {errorMessage}
            </p> */}
          </div>
          <div className="flex  flex-row gap-2 md:gap-5 justify-around mt-2">
            <div class="md:w-[35%] ">
              <label className="text-[#718096]  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                Expiry Date
              </label>
              <div class="input-field ">
                <input
                  className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                  required
                  placeholder="MM / YY"
                  id="c_expiry"
                  onChange={onChangeExp}
                  value={expriy_format(expiry)}
                />
                <div id="c_expiry_error"></div>
              </div>
            </div>

            <div className="container  md:w-[35%] ">
              <label className="text-[#718096]  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                CVV
              </label>
              <input
                id="c_cvv"
                type="password"
                className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] text-center placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-xl focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                placeholder="***"
                autoFocus
                required
                maxLength="3"
                onChange={handlecvv}
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              // onClick={handlePayment}
              type="submit"
              className="py-[9px] items-center rounded-[16px] w-[80%]  md:w-[50%] mx-auto bg-[#124072] text-[white] text-[10px] leading-[24px] tracking-[0.2px] font-bold flex justify-center "
            >
              Pay {currency} {amount}{" "}
              {loading && (
                <svg
                  className="ml-4 w-6 h-6 text-[white] animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardDetails;

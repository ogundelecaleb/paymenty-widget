import React from 'react'
import { BsCreditCard } from "react-icons/bs";


const SideBar = () => {
  return (
    <div className='max-w-[27%] ml-0'>
    <div className=" min-h-full bg-[#E2E8F0] pt-3 pb-7 sticky top-0 m-0  ">
      <div className='pb-[9px]  border-b border-gray-300 '>
        <img alt='' src='../../paylodelogo.png' className=" ml-[10px] h-[40px] w-[60px] md:w-[100px] mr-[81px] object-contain "/></div>
        <button
          to=""
          className="ml-[10px] py-[13px] px-[8px] text-gray-500  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-center mb-[12px]"
        >
          <BsCreditCard className="mr-[12px] text-lg" />
         Card
        </button>
    </div>
    </div>
  )
}

export default SideBar
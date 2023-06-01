import React from 'react'
import { TbTransferOut } from "react-icons/tb";


const SideBar = () => {
  return (
    <div className='ml-0'>
    <div className="  min-h-full bg-[#E2E8F0] pt-3 pb-7 sticky top-0 m-0  ">
        <img alt='' src='../../paylodelogo.png' className="ml-[10px] h-[40px] w-[100px] mr-[81px] mb-[9px]  border-b border-[#E2E8F0] "/>


        <button
          to=""
          className="ml-[10px] py-[13px] px-[8px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px]"
        >
          <TbTransferOut className="mr-[12px] text-lg" />
         Card
        </button>
    </div>
    </div>
  )
}

export default SideBar
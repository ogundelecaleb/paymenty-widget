import React, { useState } from "react";
import Modal from "./component/Modal";
import WidgetHome from "./widgetHome";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseModal = () => {
    setIsOpen(false);
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
       <WidgetHome/>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;

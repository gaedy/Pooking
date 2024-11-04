import { useState } from "react";

function Tooltip({ children, text = "This is Tooltip" }) {
  const [isVisible, setIsVisible] = useState(false);

  const hanldeHover = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        className="relative flex justify-center items-center group"
        onMouseEnter={hanldeHover}
        onMouseLeave={handleClose}
      >
        {children}
        {isVisible && (
          <>
            <div
              className="absolute text-nowrap bg-hover2 font-medium text-sm rounded-lg 
            w-fit h-fit p-2 top-0 mt-12 border border-gray-300 shadow-md"
            >
              <div className="w-2 h-2 absolute rotate-45 -top-[5px] right-1/2 translate-x-1 bg-hover2 border-l border-gray-300"></div>
              <p>{text}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Tooltip;

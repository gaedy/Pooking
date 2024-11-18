import { useState } from "react";
import Select from "./Select";

function DropSelect({
  children,
  content,
  label = "label",
  size,
  position = "left",
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const sizes = {
    med: "w-48",
    lg: "w-64",
  };

  const positions = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <>
      <div className="relative inline-block">
        <button
          className="flex items-center"
          onClick={handleToggle}
          
        >
          {children}
        </button>

        {isVisible && (
          <div
            className={`absolute z-10 ${positions[position]} flex flex-col gap-1 border border-input shadow-lg my-4 rounded-xl items-start 
           p-3 ${sizes[size]} bg-hover`}
          >
            <p className="text-xs font-medium pb-1">{label}</p>

            {content}
          </div>
        )}
      </div>
    </>
  );
}

export default DropSelect;

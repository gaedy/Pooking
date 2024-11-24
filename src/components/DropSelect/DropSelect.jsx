import { useEffect, useRef, useState } from "react";

function DropSelect({
  children,
  content,
  label,
  size,
  position = "left",
  className,
  hight,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const dropRef = useRef(null);

  const handleShow = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sizes = {
    med: "w-48",
    lg: "w-64",
  };

  const hights = {
    fit: "h-fit",
    fixed: "h-52",
  };

  const positions = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <>
      <div ref={dropRef} className="relative inline-block ">
        <button className="flex items-center " onClick={handleToggle}>
          {children}
        </button>

        {isVisible && (
          <div
            onClick={handleHide}
            className={`absolute z-10 ${positions[position]} ${className} flex ${hights[hight]}  flex-col border border-input shadow-lg my-4 rounded-xl items-start 
           p-3 gap-1 ${sizes[size]} bg-hover`}
          >
            {label && (
              <p className="text-xs font-medium w-full h-full top-0 sticky">
                <div className="bg-hover py-2 w-full">
                  {label}
                </div>
              </p>
            )}

            {content}
          </div>
        )}
      </div>
    </>
  );
}

export default DropSelect;

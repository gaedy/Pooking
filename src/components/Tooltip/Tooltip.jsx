import { createContext, useReducer, useState } from "react";

function Tooltip({ children, text = "This is Tooltip" }) {
  // const [isVisible, setIsVisible] = useState(false);

  const initValue = false;
  const Visible = "VISIBLE";
  const notVisible = "NOT_VISIBLE";
  const toggleVisible = "TOGGLE_VISIBLE";

  function reducer(state, action) {
    switch (action.type) {
      case Visible:
        return true;

      case notVisible:
        return false;

      case toggleVisible:
        return !state;

      default:
        state;
    }
  }

  const [isVisible, dispatch] = useReducer(reducer, initValue);

  const hanldeHover = () => {
    // setIsVisible(true);
    dispatch({ type: Visible });
  };

  const handleClose = () => {
    // setIsVisible(false);
    dispatch({ type: notVisible });
  };

  return (
    <>
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={hanldeHover}
        onMouseLeave={handleClose}
        onClick={handleClose}
      >
        {children}
        {isVisible && (
          <>
            <div
              className="absolute text-nowrap bg-hover2 font-medium text-sm rounded-lg 
            w-fit h-fit p-2 top-0 z-40 mt-12 border border-input shadow-md"
            >
              <div className="w-2 h-2 absolute rotate-45 -top-[5px] right-1/2 translate-x-1 bg-hover2 border-l  border-input"></div>
              <p>{text}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Tooltip;

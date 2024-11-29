import { animated, useSpring } from "@react-spring/web";
import { useReducer } from "react";

function Tooltip({
  children,
  text = "This is Tooltip",
  className,
  arrowPosition,
}) {
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

  const handleHover = () => {
    // setIsVisible(true);
    dispatch({ type: Visible });
  };

  const handleClose = () => {
    // setIsVisible(false);
    dispatch({ type: notVisible });
  };

  const arrows = {
    left: "left-1 translate-x-full",
    right: "right-1 -translate-x-full",
  };

  const tooltipAnimation = useSpring({
    y: isVisible ? 0 : -5,
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 160,
    },
  });

  return (
    <>
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={handleHover}
        onMouseLeave={handleClose}
        onClick={handleClose}
      >
        {children}
        {isVisible && (
          <>
            <animated.div
              style={tooltipAnimation}
              className={`absolute ${className} flex justify-center items-center text-nowrap bg-tooltip font-medium text-sm rounded-lg 
            w-fit h-fit p-2 top-0 z-40 mt-12 shadow-md`}
            >
              <div
                className={`w-2 h-2 absolute rotate-45 -top-[4px] bg-tooltip ${arrows[arrowPosition]}`}
              ></div>
              <p>{text}</p>
            </animated.div>
          </>
        )}
      </div>
    </>
  );
}

export default Tooltip;

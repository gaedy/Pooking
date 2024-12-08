import { animated, useSpring } from "@react-spring/web";

import { useState } from "react";

function NotifAlert({ message = "This is Alert", onClosing, delay = 0 }) {
  const [isShow, setIsShow] = useState(true);

  const animation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: -1, y: -90 },
    delay: delay,
    config: { mass: 2, tension: 300, friction: 34 },
  });

  return (
    <>
      {isShow && (
        <animated.div
          style={animation}
          className="fixed bg-zinc-300/30 shadow-lg border border-black/10 backdrop-filter backdrop-blur-2xl 
          p-2 w-60 h-28 rounded-xl z-50 right-10 top-20 flex flex-col justify-center items-center 
          dark:bg-white/20 dark:border-white/15"
        >
          {/* <div
            onClick={onClosing}
            className="ml-auto absolute transition-all top-2 right-2 dark:bg-black/30 bg-zinc-400/30 
            hover:bg-zinc-500/30 dark:hover:bg-black/40 cursor-pointer border border-white/15 
            backdrop-filter backdrop-blur-xl rounded-3xl p-1"
          >
            <X size={14} />
          </div> */}
          <div className="w-full text-sm select-none h-full flex-1 flex justify-center items-center text-pretty">
            <p>{message}</p>
          </div>
        </animated.div>
      )}
    </>
  );
}

export default NotifAlert;

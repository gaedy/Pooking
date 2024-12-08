import { useSpring } from "@react-spring/web";

const useNiceAnimation = (options = {}) => {
  const {
    from = { opacity: 0, y: -20, x: 2, transform: "scale(0.95)" },
    to = { opacity: 1, y: 0, x: 0, transform: "scale(1)" },
    config = { mass: 1, tension: 180, friction: 14 },
  } = options;

  const animation = useSpring({
    from,
    ...to,
    config,
  });

  return animation;
};

export default useNiceAnimation;

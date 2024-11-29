import { animated, useSpring } from "@react-spring/web";
import { Outlet, useLocation } from "react-router-dom";

function LoginPage() {
  const locate = useLocation();

  const currentPageTitles = {
    "/login/signin": "Sign in",
    "/login/signup": "Sign up",
  };
  const currentPageTitle = currentPageTitles[locate.pathname] || "Welcome";

  const loginAnimation = useSpring({
    from: { opacity: 0, y: -60 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 90, friction: 12 },
  });

  return (
    <>
      <animated.div
        style={loginAnimation}
        className="flex flex-col items-ce justify-center p-4 py-8 gap-2 h-full max-w-xl mx-auto"
      >
        <p className="px-4 text-xl font-bold">{currentPageTitle}</p>

        <Outlet />
      </animated.div>
    </>
  );
}

export default LoginPage;

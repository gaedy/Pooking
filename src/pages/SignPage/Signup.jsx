import { NavLink } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import useNiceAnimation from "../../hooks/useNiceAnimation";
import { animated } from "@react-spring/web";

function Signup() {
  useTitle("Sign up - Pooking");
  const animation = useNiceAnimation();

  return (
    <>
      <animated.div
        style={animation}
        className="flex md:flex-row flex-col shadow-xl justify-between items-start gap-4 
          w-full max-w-5xl mx-auto rounded-xl bg-background flex-1 p-4 h-screen"
      >
        <div className="h-full w-full items-center px-4 py-4 gap-4 flex flex-col">
          <p className="text-xl font-semibold">Get Started</p>
          <p className=" text-center text-pretty">
            Enter your details to get sign up to your account
          </p>

          <div className="flex flex-col transition-all w-full py-4 text-sm justify-center gap-2 items-center">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2 w-full">
              <input
                placeholder="First name"
                type="name"
                className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
              ></input>
              <input
                placeholder="Last name"
                type="name"
                className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
              ></input>
            </div>

            <input
              placeholder="Email"
              type="email"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
            <input
              placeholder="Password"
              type="password"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
            <input
              placeholder="Confirm Password"
              type="password"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
          </div>

          <div className="bg-button select-none transition-all cursor-pointer text-center hover:bg-buttonHover active:bg-buttonHover2 text-white p-2 w-full rounded-lg">
            Sign up
          </div>

          <p className="text-sm text-pretty">
            Already have an account?{" "}
            <NavLink to="/login/signin">
              <b className="hover:underline cursor-pointer text-button">
                Sign in
              </b>
            </NavLink>
          </p>
        </div>
      </animated.div>
    </>
  );
}

export default Signup;

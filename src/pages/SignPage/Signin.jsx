import { NavLink } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

function Signin() {
    useTitle("Sign in - Pooking");
  return (
    <div
      className="flex md:flex-row flex-col shadow-xl justify-between items-start gap-4 
        w-full max-w-5xl mx-auto rounded-xl bg-background flex-1 p-4 h-screen"
    >
      <div className="h-full w-full items-center px-4 py-4 gap-4 flex flex-col">
        <p className="text-xl font-semibold">Get Started</p>
        <p className=" text-center text-pretty">
          Enter your details to get sign in to your account
        </p>

        <div className="flex flex-col transition-all w-full py-4 text-sm justify-center gap-2 items-center">
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

          <p className="self-start text-baseHoverText hover:text-baseText cursor-pointer hover:underline">
            Having trouble in sign in?
          </p>
        </div>

        <div className="bg-button select-none transition-all cursor-pointer text-center hover:bg-buttonHover active:bg-buttonHover2 text-white p-2 w-full rounded-lg">
          Sign in
        </div>

        <p className="text-sm text-pretty">
          Don&apos;t have an account?{" "}
          <NavLink to="/login/signup">
            <b className="hover:underline cursor-pointer text-button">
              Sign up
            </b>
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signin;

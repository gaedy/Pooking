import { NavLink } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { animated } from "@react-spring/web";
import useNiceAnimation from "../../hooks/useNiceAnimation";
import { useTranslation } from "react-i18next";

function Signin() {
  useTitle("Sign in - Pooking");

  const animation = useNiceAnimation();
  const { t } = useTranslation();

  return (
    <animated.div
      style={animation}
      className="flex md:flex-row flex-col shadow-xl justify-between items-start gap-4 
        w-full max-w-5xl mx-auto rounded-xl bg-background flex-1 p-4 h-screen"
    >
      <div className="h-full w-full items-center px-4 py-4 gap-4 flex flex-col">
        <p className="text-xl font-semibold">{t("signin.in1")}</p>
        <p className=" text-center text-pretty">{t("signin.in2")}</p>

        <div className="flex flex-col transition-all w-full py-4 text-sm justify-center gap-2 items-center">
          <input
            placeholder={t("signin.1")}
            type="email"
            className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
          ></input>
          <input
            placeholder={t("signin.2")}
            type="password"
            className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
          ></input>

          <p className="self-start text-baseHoverText hover:text-baseText cursor-pointer hover:underline">
            {t("signin.in3")}
          </p>
        </div>

        <div className="bg-button select-none transition-all cursor-pointer text-center hover:bg-buttonHover active:bg-buttonHover2 text-white p-2 w-full rounded-lg">
          {t("signin.in6")}
        </div>

        <p className="text-sm text-pretty">
          {t("signin.in4")}{" "}
          <NavLink to="/login/signup">
            <b className="hover:underline cursor-pointer text-button">
              {t("signin.in5")}
            </b>
          </NavLink>
        </p>
      </div>
    </animated.div>
  );
}

export default Signin;

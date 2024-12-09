import { NavLink } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import useNiceAnimation from "../../hooks/useNiceAnimation";
import { animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

function Signup() {
  useTitle("Sign up - Pooking");
  const animation = useNiceAnimation();
  const { t } = useTranslation();
  return (
    <>
      <animated.div
        style={animation}
        className="flex md:flex-row flex-col shadow-xl justify-between items-start gap-4 
          w-full max-w-5xl mx-auto rounded-xl bg-background flex-1 p-4 h-screen"
      >
        <div className="h-full w-full items-center px-4 py-4 gap-4 flex flex-col">
          <p className="text-xl font-semibold">{t("signup.up1")}</p>
          <p className=" text-center text-pretty">
          {t("signup.up2")}
          </p>

          <div className="flex flex-col transition-all w-full py-4 text-sm justify-center gap-2 items-center">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2 w-full">
              <input
                placeholder={t("signup.1")}
                type="name"
                className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
              ></input>
              <input
                placeholder={t("signup.2")}
                type="name"
                className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
              ></input>
            </div>

            <input
              placeholder={t("signup.3")}
              type="email"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
            <input
              placeholder={t("signup.4")}
              type="password"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
            <input
              placeholder={t("signup.5")}
              type="password"
              className="w-full bg-hover transition-all focus-within:bg-hover2 hover:bg-hover2 p-2 px-2 outline-none border border-input rounded-lg "
            ></input>
          </div>

          <div className="bg-button select-none transition-all cursor-pointer text-center hover:bg-buttonHover active:bg-buttonHover2 text-white p-2 w-full rounded-lg">
          {t("signup.up3")}
          </div>

          <p className="text-sm text-pretty">
          {t("signup.up4")}{" "}
            <NavLink to="/login/signin">
              <b className="hover:underline cursor-pointer text-button">
              {t("signup.up5")}
              </b>
            </NavLink>
          </p>
        </div>
      </animated.div>
    </>
  );
}

export default Signup;

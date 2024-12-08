import { MoonIcon, Settings2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { animated, useSpring } from "@react-spring/web";
import useNiceAnimation from "../../hooks/useNiceAnimation";
import { useTranslation } from "react-i18next";

function Settings() {
  useTitle("Settings - Pooking");
  const { t } = useTranslation();

  const animation = useNiceAnimation();

  const animation2 = useSpring({
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
    config: { mass: 2, tension: 340, friction: 30 },
  });

  return (
    <>
      <animated.div
        style={animation}
        className="flex flex-col items-ce justify-center gap-2 p-4 py-8 h-full my-auto max-w-5xl mx-auto"
      >
        <p className="px-4 text-xl font-bold">{t("settings.1")}</p>

        <div className="flex md:flex-row flex-col shadow-xl text-baseHoverText justify-between items-start gap-4 w-full max-w-5xl mx-auto rounded-xl bg-background p-4 h-screen">
          <div className="w-full md:w-1/4">
            <div className="flex flex-col gap-2 text-sm font-semibold ">
              <NavLink
                to="general"
                className={({ isActive }) =>
                  `${isActive && "bg-hover text-baseText rounded-md"}`
                }
              >
                <div className="hover:bg-hover transition-all duration-300 p-2 hover:text-baseText rounded-md flex items-center gap-2">
                  <Settings2 size={18} className="" />
                  <p>{t("settings.2")}</p>
                </div>
              </NavLink>

              <NavLink
                to="appearance"
                className={({ isActive }) =>
                  `${isActive && "bg-hover text-baseText rounded-md"}`
                }
              >
                <div className="hover:bg-hover transition-all duration-300 hover:text-baseText p-2 rounded-md flex items-center gap-2">
                  <MoonIcon size={18} className="" />
                  <p>{t("settings.3")}</p>
                </div>
              </NavLink>

              {/* <NavLink
                to="card-system"
                className={({ isActive }) =>
                  `${isActive && "bg-hover text-baseText rounded-md"}`
                }
              >
                <div className="hover:bg-hover transition-all duration-300 hover:text-baseText p-2 rounded-md flex items-center gap-2 h-full">
                  <FileSlidersIcon size={18} className="" />
                  <p>Cards System</p>
                </div>
              </NavLink> */}
            </div>
          </div>

          <div className="bg-hover rounded-lg w-full md:w-3/4 h-full overflow-auto">
            <animated.div
              style={animation2}
              className="p-4 flex flex-col gap-4 text-sm"
            >
              <Outlet />
            </animated.div>
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Settings;

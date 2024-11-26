import profile from "/src/assets/icons/profile.svg";
import down from "/src/assets/icons/down.svg";
import Tooltip from "../Tooltip/Tooltip";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  CircleUserRound,
  Heart,
  LayoutDashboard,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice/themeSlice";
import { useEffect } from "react";
import useTheme from "../../hooks/useTheme";

function Navbar() {
  const { isDarkTheme, handleToggleTheme} = useTheme();

  return (
    <>
      <div
        className="h-16 flex sticky top-0 z-20 items-center justify-between  px-10 p-2 mt-5 bg-hover gap-2 
        text-baseHoverText font-semibold text-sm"
      >
        <NavLink to="/">
          <div className="text-lg  font-bold mr-10 hover:text-baseText transition-all duration-300">
            <p>Pooking</p>
          </div>
        </NavLink>

        <div
          className=" md:flex hidden z-10 items-center justify-between  bg-hover gap-2 
          text-baseHoverText font-semibold text-sm"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive && "bg-background rounded-full text-baseText"}`
            }
          >
            <div className="hover:text-baseText cursor-pointer select-none hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
              Rent
            </div>
          </NavLink>

          <NavLink
            to="buy"
            className={({ isActive }) =>
              `${isActive && "bg-background rounded-full text-baseText"}`
            }
          >
            <div className="hover:text-baseText cursor-pointer select-none hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
              Buy
            </div>
          </NavLink>

          <NavLink
            to="sell"
            className={({ isActive }) =>
              `${isActive && "bg-background rounded-full text-baseText"}`
            }
          >
            <div className="hover:text-baseText cursor-pointer hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
              Sell
            </div>
          </NavLink>
        </div>

        <div className="ml-auto hidden md:flex">
          <Tooltip text={isDarkTheme ? "Change to Light" : "Change to Dark"}>
            <div
              onClick={handleToggleTheme}
              className="hover:bg-background transition-all duration-300 cursor-pointer border border-input p-3 flex rounded-full items-center gap-2"
            >
              {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </div>
          </Tooltip>
        </div>
        

        {/* for curreny button */}
        {/* <div className="hidden md:flex">
          <Tooltip text={isDarkTheme ? "Change to Light" : "Change to Dark"}>
            <div
              onClick={handleToggleTheme}
              className="hover:bg-background transition-all duration-300 cursor-pointer border border-input p-3 flex rounded-full items-center gap-2"
            >
              {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </div>
          </Tooltip>
        </div> */}

        <button className="md:hidden z-50 flex">
          <Menu />
        </button>

        <div className=" transition-all md:flex hidden duration-300 hover:bg-background border border-input hover:text-baseText p-2 w-fit h-full rounded-full justify-between items-center gap-4 cursor-pointer">
          <div className="bg-hover rounded-full">
            {/* <img
              className="w-8 p-1 pointer-events-none select-none"
              src={profile}
            ></img> */}
            <CircleUserRound size={30} className="p-1" />
          </div>

          <div className="flex select-none flex-col justify-center items-start">
            {/* <p className="text-alternateText text-xs">Good morning</p> */}
            <p>Sign in</p>
          </div>

          <DropSelect
            label="Menu"
            size="lg"
            position="right"
            content={
              <>
                <NavLink to="dashboard" className="w-full">
                  <Select
                    text="Dashboard"
                    icon={<LayoutDashboard size={22} />}
                  />
                </NavLink>

                <NavLink to="saved" className="w-full">
                  <Select text="Saved Cards" icon={<Heart size={22} />} />
                </NavLink>

                <NavLink to="settings" className="w-full">
                  <Select text="Settings" icon={<Settings size={22} />} />
                </NavLink>
              </>
            }
          >
            <Tooltip text="Open Menu">
              <div className="bg-hover hover:bg-hover2 rounded-full">
                {/* <img
                  className="w-8 p-[6px] pointer-events-none select-none "
                  src={down}
                ></img> */}
                <ChevronDown size={30} className="p-[7px]" />
              </div>
            </Tooltip>
          </DropSelect>
        </div>
      </div>
    </>
  );
}

export default Navbar;

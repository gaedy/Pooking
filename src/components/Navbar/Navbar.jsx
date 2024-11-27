import Tooltip from "../Tooltip/Tooltip";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  CircleUserRound,
  Heart,
  LayoutDashboard,
  Menu,
  Moon,
  Scale,
  Settings,
  Sun,
  X,
} from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";
import { useEffect, useRef, useState } from "react";
import useTheme from "../../hooks/useTheme";
import { animated, config, useSpring } from "@react-spring/web";

function Navbar() {
  const { isDarkTheme, handleToggleTheme } = useTheme();

  const [isSidebar, setIsSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebar((prev) => !prev);
  };

  const sidebarRef = useRef();

  useEffect(() => {
    const handleOutsideSidebar = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideSidebar);
    return () => {
      document.removeEventListener("mousedown", handleOutsideSidebar);
    };
  }, []);

  useEffect(() => {
    const whenScreenGetBiggerButSidebarIsTrue = () => {
      if (window.innerWidth >= 768) {
        setIsSidebar(false);
      }
    };

    whenScreenGetBiggerButSidebarIsTrue();

    window.addEventListener("resize", whenScreenGetBiggerButSidebarIsTrue);

    return () => {
      window.removeEventListener("resize", whenScreenGetBiggerButSidebarIsTrue);
    };
  }, []);

  const sidebarAnimation = useSpring({
    transform: isSidebar ? "translateX(0%)" : "translateX(100%)",

    opacity: isSidebar ? 1 : 0,
    config: {
      tension: 170,
      friction: 20,
    },
  });

  return (
    <>
      <div
        className="h-16 flex sticky top-0 z-20 items-center  justify-between px-10 p-2 mt-5 bg-hover gap-2 
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
              `${
                isActive &&
                "bg-background rounded-full dark:shadow-none transition-all duration-300 shadow-lg text-baseText"
              }`
            }
          >
            <div className="hover:text-baseText  cursor-pointer select-none hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
              Rent
            </div>
          </NavLink>

          <NavLink
            to="buy"
            className={({ isActive }) =>
              `${
                isActive &&
                "bg-background transition-all dark:shadow-none duration-300 shadow-lg rounded-full text-baseText"
              }`
            }
          >
            <div className="hover:text-baseText cursor-pointer select-none hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
              Buy
            </div>
          </NavLink>

          <NavLink
            to="sell"
            className={({ isActive }) =>
              `${
                isActive &&
                "bg-background transition-all duration-300 shadow-lg dark:shadow-none rounded-full text-baseText"
              }`
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

        <button className="md:hidden flex">
          <Menu onClick={toggleSidebar} />
        </button>

        {isSidebar && (
          <animated.div
            style={sidebarAnimation}
            ref={sidebarRef}
            className="h-full  border-l border-input md:hidden z-20 right-0 w-5/6 gap-4 p-4 max-w-sm top-0 fixed flex flex-col bg-background"
          >
            <div className="flex justify-between px-3 items-center">
              <p className="text-lg">Menu</p>
              <Tooltip
                text="Close Sidebar"
                className="right-1 top-2"
                arrowPosition="right"
              >
                <div
                  className="p-3 hover:bg-hover rounded-full transition-hover duration-200 cursor-pointer"
                  onClick={toggleSidebar}
                >
                  <X size={20} />
                </div>
              </Tooltip>
            </div>

            <div className="flex justify-center text-lg  items-center gap-2 self-center flex-wrap w-full">
              <NavLink to="/" className="h-fit w-full">
                <div
                  onClick={toggleSidebar}
                  className="cursor-pointer transition-hover duration-200 hover:text-baseText rounded-full border border-input hover:bg-hover active:bg-hover2 p-4 px-6 flex gap-2 justify-center items-center"
                >
                  <p>Rent</p>
                </div>
              </NavLink>

              <NavLink to="buy" className="h-fit w-full">
                <div
                  onClick={toggleSidebar}
                  className=" cursor-pointer transition-hover duration-200 hover:text-baseText rounded-full border border-input hover:bg-hover active:bg-hover2 p-4 px-6 flex gap-2 justify-center items-center"
                >
                  <p>Buy</p>
                </div>
              </NavLink>

              <NavLink to="sell" className="h-fit w-full">
                <div
                  onClick={toggleSidebar}
                  className=" h-fit w-full cursor-pointer transition-hover duration-200 hover:text-baseText rounded-full border border-input hover:bg-hover active:bg-hover2 p-4 px-6 flex gap-2 justify-center items-center"
                >
                  <p>Sell</p>
                </div>
              </NavLink>
            </div>

            <div className="flex flex-col select-none w-full mt-auto text-baseHoverText">
              <div className=" h-fit w-full transition-hover duration-200 cursor-pointer rounded-lg hover:text-baseText active:bg-hover2 hover:bg-hover p-3 flex gap-2 justify-start items-center">
                <CircleUserRound size={16} />
                <p>Sign in</p>
              </div>
              <NavLink to="saved" className="h-fit w-full">
                <div
                  onClick={toggleSidebar}
                  className=" h-fit w-full transition-hover duration-200 active:bg-hover2 cursor-pointer rounded-lg hover:text-baseText hover:bg-hover p-3 flex gap-2 justify-start items-center"
                >
                  <Heart size={16} />
                  <p>Saved Cards</p>
                </div>
              </NavLink>

              <NavLink to="settings" className="h-fit w-full">
                <div
                  onClick={toggleSidebar}
                  className="transition-hover duration-200 cursor-pointer active:bg-hover2 rounded-lg hover:text-baseText hover:bg-hover p-3 flex gap-2 justify-start items-center"
                >
                  <Settings size={16} />
                  <p>Settings</p>
                </div>
              </NavLink>
            </div>
          </animated.div>
        )}

        {isSidebar && (
          <div className="w-full h-full bg-black opacity-60 z-10 fixed inset-0" />
        )}

        <div className=" transition-all md:flex hidden duration-300 hover:bg-background border border-input hover:text-baseText p-2 w-fit h-full rounded-full justify-between items-center gap-4 cursor-pointer">
          <div className="bg-hover rounded-full">
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

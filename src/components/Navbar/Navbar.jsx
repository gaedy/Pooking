import profile from "/src/assets/icons/profile.svg";
import down from "/src/assets/icons/down.svg";
import Tooltip from "../Tooltip/Tooltip";
import { NavLink } from "react-router-dom";
import { Heart, LayoutDashboard, Menu, Settings } from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";

function Navbar() {
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

        <button className="md:hidden z-50 flex">
          <Menu />
        </button>

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

        {/* <NavLink
        to="sell"
        className={({ isActive }) =>
          `${isActive && "bg-background rounded-full text-baseText"}`
        }
      >
        <div className="hover:text-baseText cursor-pointer mr-auto hover:bg-background p-2 px-4 rounded-full transition-all duration-300">
          Saved
        </div>
      </NavLink> */}

        <div className=" ml-auto transition-all md:flex hidden duration-300 hover:bg-background hover:shadow-md border border-input hover:text-baseText p-2 w-fit h-full rounded-full justify-between items-center gap-4 cursor-pointer">
          <div className="bg-hover rounded-full">
            <img
              className="w-8 p-1 pointer-events-none select-none"
              src={profile}
            ></img>
          </div>

          <div className="flex flex-col justify-center items-start">
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
                <img
                  className="w-8 p-[6px] pointer-events-none select-none "
                  src={down}
                ></img>
              </div>
            </Tooltip>
          </DropSelect>
        </div>
      </div>
    </>
  );
}

export default Navbar;

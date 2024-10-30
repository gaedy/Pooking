import profile from "/src/assets/icons/profile.svg";
import down from "/src/assets/icons/down.svg";
import { useRef } from "react";
import { useEffect } from "react";
import Dialog from "../Dialog/Dialog";
function Navbar() {
  return (
    <div className="h-16  flex items-center px-20 p-2 gap-8 text-baseHoverText   font-semibold text-sm border-b border-hover2">
      <div className="text-lg font-bold mr-10 ">Pooking</div>
      <div className="hover:text-baseText cursor-pointer transition-all duration-300">
        Buy
      </div>
      <div className="hover:text-baseText cursor-pointer transition-all duration-300">
        Rent
      </div>

      <div className="ml-auto transition-all duration-300 hover:shadow-md border border-hover2 hover:bg-hover hover:text-baseText p-2 w-fit h-full flex rounded-full justify-between items-center gap-4 cursor-pointer">
        <div className="bg-hover  rounded-full">
          <img className="w-8 p-1 pointer-events-none" src={profile}></img>
        </div>

        <div className="flex flex-col justify-center items-start">
          {/* <p className="text-alternateText text-xs">Good morning</p> */}
          <p>Sign in</p>
        </div>

        <div className="bg-hover hover:bg-hover2 rounded-full">
          <img
            className="w-8 p-[6px] pointer-events-none select-none "
            src={down}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

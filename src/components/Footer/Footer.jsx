import { NavLink } from "react-router-dom";
import { Facebook, Github, X } from "./Icons";

function Footer() {
  return (
    <>
      {/* <div className=" bg-hover2 flex justify-around items-center p-8 border-t border-input">
        <div className="flex flex-col gap-2">
          <p className="font-bold">Pages</p>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to="/">
              <p className="hover:underline cursor-pointer">Rent</p>
            </NavLink>
            <NavLink to="buy">
              <p className="hover:underline cursor-pointer">Buy</p>
            </NavLink>
            <NavLink to="sell">
              <p className="hover:underline cursor-pointer">Sell</p>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Support</p>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to="/">
              <p className="hover:underline cursor-pointer">About Us</p>
            </NavLink>
            <NavLink to="buy">
              <p className="hover:underline cursor-pointer">Buy</p>
            </NavLink>
            <NavLink to="sell">
              <p className="hover:underline cursor-pointer">Sell</p>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Follow Us</p>
          <div className="text-sm flex flex-col gap-2">
            <NavLink to="/">
              <p className="hover:underline cursor-pointer">Facebook</p>
            </NavLink>
            <NavLink to="buy">
              <p className="hover:underline cursor-pointer">Twitter</p>
            </NavLink>
            <NavLink to="sell">
              <p className="hover:underline cursor-pointer">Reddit</p>
            </NavLink>
          </div>
        </div>
      </div> */}

      <div className="border-t border-black border-opacity-10 bg-hover2 text-sm font-bold flex justify-between items-center p-4 px-10">
        <p>Build by aGae</p>

        <div className="flex flex-row items-center justify-center gap-2">
          <div className="cursor-pointer">
            <Facebook />
          </div>

          <div className="cursor-pointer">
            <X />
          </div>

          <div className="cursor-pointer">
            <Github />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

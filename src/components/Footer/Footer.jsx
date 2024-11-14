import { NavLink } from "react-router-dom";
import Dialog from "../Dialog/Dialog";

function Footer() {
  return (
    <>
      <div className=" bg-hover2 flex justify-around items-center p-8 border-t border-input">
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
          <p className="font-bold">Pooking</p>
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
      </div>

      <div className="border-t border-input bg-hover2 text-sm flex justify-between items-center p-4">
        <p>2024 Pooking, Inc.</p>
        <Dialog>
          <p>ghj</p>
        </Dialog>
      </div>
    </>
  );
}

export default Footer;

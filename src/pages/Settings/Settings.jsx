import { FileSlidersIcon, MoonIcon, Settings2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function Settings() {
  return (
    <>
      <div className="flex flex-col items-ce justify-center gap-2 p-10 h-screen">
        <p className="px-4 text-xl font-bold">Settings</p>

        <div className="flex md:flex-row flex-col shadow-xl text-baseHoverText  justify-between items-start gap-4 w-full rounded-xl bg-hover2 p-4 h-full">
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
                  <p>General</p>
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
                  <p>Appearance</p>
                </div>
              </NavLink>

              <NavLink
                to="card-system"
                className={({ isActive }) =>
                  `${isActive && "bg-hover text-baseText rounded-md"}`
                }
              >
                <div className="hover:bg-hover transition-all duration-300 hover:text-baseText p-2 rounded-md flex items-center gap-2 h-full">
                  <FileSlidersIcon size={18} className="" />
                  <p>Cards System</p>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="bg-hover rounded-lg w-full md:w-3/4 h-full overflow-auto">
            <div className="p-4 flex flex-col gap-4 text-sm">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;

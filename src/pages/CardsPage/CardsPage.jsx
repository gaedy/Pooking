import { Outlet } from "react-router-dom";
import Searchbar from "../../components/Searchbar/Searchbar";

function CardsPage() {
  return (
    <>
      <div className="w-full h-full mt-10 py-10 flex flex-col gap-8 ">
        <Searchbar />

        <Outlet />
      </div>
    </>
  );
}

export default CardsPage;

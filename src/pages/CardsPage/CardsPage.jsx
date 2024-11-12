import Searchbar from "../../components/Searchbar/Searchbar";
import OultetFetch from "../OutletFetch/OultetFetch";

function CardsPage() {
  return (
    <>
      <div className="w-full h-full mt-10 py-10 flex flex-col gap-8 ">
        <Searchbar />

        <OultetFetch />
      </div>
    </>
  );
}

export default CardsPage;

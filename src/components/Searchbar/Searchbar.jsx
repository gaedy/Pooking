import Button from "../Button/Button";
import search from "/src/assets/icons/search.svg";
import date from "/src/assets/icons/date.svg";
import location from "/src/assets/icons/location.svg";
import guest from "/src/assets/icons/guest.svg";

function Searchbar() {
  return (
    <>
      <div className="flex  flex-col justify-center items-center  gap-8 h-fit ">
        <div className="font-bold text-3xl flex justify-center items-center">
          Find your next stay ...
        </div>

        <div className="rounded-xl gap-2 p-2 h-fit w-fit flex justify-center  flex-wrap items-center text-xs font-semibold">
          <div className="flex flex-row gap-2 bg-hover hover:bg-hover2 focus-within:bg-hover2 p-2 rounded-lg transition-all duration-200">
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-5 scale-75 pointer-events-none select-none"
                src={search}
              ></img>
              {/* <p>Search</p> */}
            </div>
            <input
              className=" p-2 rounded-md outline-none"
              placeholder="Search here"
            ></input>
          </div>

          <div className="flex flex-row gap-2 bg-hover hover:bg-hover2 focus-within:bg-hover2 p-2 rounded-lg transition-all duration-200">
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-5 scale-75 pointer-events-none select-none"
                src={location}
              ></img>
              <p>Location</p>
            </div>
            <select className=" p-2 rounded-md w-32 outline-none" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
          </div>

          <div className="flex flex-row gap-2 bg-hover hover:bg-hover2 focus-within:bg-hover2 p-2 rounded-lg transition-all duration-200">
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-5 scale-75 pointer-events-none select-none"
                src={date}
              ></img>
              <p>Date</p>
            </div>
            <input
              className=" p-2 rounded-md w-32 outline-none"
              type="date"
              id="datemax"
              name="datemax"
              min="2000-01-02"
            />
          </div>

          

          <div className="flex flex-row gap-2 bg-hover hover:bg-hover2 focus-within:bg-hover2 p-2 rounded-lg transition-all duration-200">
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-5 scale-75 pointer-events-none select-none"
                src={guest}
              ></img>
              <p>Guests</p>
            </div>
            <input
              className="p-2 rounded-md w-16 outline-none"
              placeholder="Search here"
              type="number"
              value="0"
              min="0"
            ></input>
          </div>

          <Button text="Search"></Button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;

import Button from "../Button/Button";
import searchIcon from "/src/assets/icons/searchIcon.svg";
import date from "/src/assets/icons/date.svg";
import location from "/src/assets/icons/location.svg";
import guest from "/src/assets/icons/guest.svg";
import { rentCardsData } from "../../api/cards/rentCardsData";
import { useState } from "react";

function Searchbar({ onChange }) {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState(0);
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    onChange({ search });
  };

  return (
    <>
      <div className="flex  flex-col justify-center items-center  gap-12 h-fit ">
        <div className="font-bold text-3xl flex justify-center items-center">
          Find your next stay ...
        </div>

        <div className=" rounded-full h-fit w-fit flex justify-center  flex-wrap items-center text-xs font-semibold">
          <div className="flex flex-row hover:shadow-md focus-within:shadow-md bg-background p-2 rounded-full transition-all duration-300">
            <div className="flex flex-row justify-start items-center gap-1 ">
              {/* <img
                className="w-5 scale-75 pointer-events-none select-none"
                src={searchIcon}
              ></img> */}
            </div>
            <input
              className=" p-3 mr-1 hover:bg-hover placeholder-alternateText transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>

            <div className="flex mr-1 hover:bg-hover focus-within:bg-hover rounded-full transition-all duration-200 px-2 group">
              <div className="flex flex-row justify-start items-center group">
                <img
                  className="w-5 scale-75 pointer-events-none select-none"
                  src={location}
                ></img>

                <select className=" p-1 group-hover:bg-hover bg-background transition-all duration-200 focus-within:bg-hover rounded-full outline-none">
                  {rentCardsData.map((card) => (
                    <option key={card.id} value={card.location}>
                      {card.location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex mr-1 hover:bg-hover focus-within:bg-hover rounded-full transition-all duration-200 px-2 group">
              <div className="flex flex-row justify-start items-center gap-1 ">
                <img
                  className="w-5 scale-75 pointer-events-none select-none"
                  src={date}
                ></img>

                <input
                  className="p-1  group-hover:bg-hover transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
                  type="date"
                  id="datemax"
                  name="datemax"
                  min="2000-01-02"
                  value={dates}
                  onChange={setDates}
                  placeholder="Add dates"
                />
              </div>
            </div>

            <div className="flex hover:bg-hover focus-within:bg-hover rounded-full transition-all duration-200 px-2 group">
              <div className="flex flex-row justify-start items-center ">
                <img
                  className="w-5 scale-75 pointer-events-none select-none"
                  src={guest}
                ></img>

                <input
                  className="p-1 group-hover:bg-hover w-20 transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
                  placeholder="Guests"
                  type="number"
                  value={guests}
                  onChange={setGuests}
                  min="0"
                ></input>
              </div>
            </div>

            <Button onClick={handleSubmit} text="Search" className="" />
          </div>

         
        </div>
      </div>
    </>
  );
}

export default Searchbar;

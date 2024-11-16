import Button from "../Button/Button";
import location from "/src/assets/icons/location.svg";
import guest from "/src/assets/icons/guest.svg";
import { rentCardsData } from "../../api/cards/rentCardsData";
import { useState } from "react";
import { CalendarSearch, ChevronDown, Search } from "lucide-react";

function Searchbar({ setSearchTerm, setGuestNmuber }) {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    setSearchTerm(search);
    setGuestNmuber(guests);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearch("");

    setGuestNmuber(0);
    setGuests("");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value === "") {
      handleClear();
    }
  };

  const handleGuestChange = (e) => {
    const value = e.target.value;
    setGuests(value);
    if (value === "") {
      setGuestNmuber("");
    }
  };

  return (
    <>
      <div className="flex  flex-col justify-center items-center  gap-10 h-fit ">
        <div className="font-bold md:text-3xl text-xl flex justify-center items-center">
          Find your next stay ...
        </div>
        <button onClick={handleClear}>clear</button>

        <div
          className=" rounded-[1.8rem] md:rounded-full mx-2 flex-shrink h-fit md:w-fit w-11/12 flex md:flex-row flex-col justify-center items-center text-xs font-semibold
         p-2 gap-1 bg-background hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300"
        >
          <input
            className="md:w-full p-4 w-full shrink border border-input hover:bg-hover placeholder-alternateText transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none "
            placeholder="Search here"
            value={search}
            onChange={handleSearchChange}
          ></input>

          <div className="flex hover:bg-hover p-4 h-fit md:w-fit w-full border border-input  focus-within:bg-hover rounded-full transition-all duration-200 group">
            <div className="flex flex-row justify-start items-center gap-1 group">
              <img
                className="w-4  pointer-events-none select-none"
                src={location}
              ></img>

              <select className="group-hover:bg-hover bg-background transition-all duration-200 focus-within:bg-hover rounded-full outline-none">
                {rentCardsData.map((card) => (
                  <option key={card.id} value={card.location}>
                    {card.location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex hover:bg-hover p-4 md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group">
            <div className="flex flex-row justify-start items-center gap-2">
              <CalendarSearch size={17} />

              <input
                className="group-hover:bg-hover transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
                type="date"
                id="datemax"
                name="datemax"
                min="2000-01-02"
                value={dates}
                onChange={(e) => {
                  setDates(e.target.value);
                }}
                placeholder="Add dates"
              />
            </div>
          </div>

          <div className="flex hover:bg-hover p-4 md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group">
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-4 pointer-events-none select-none"
                src={guest}
              ></img>

              <input
                className="group-hover:bg-hover w-20 px-1 transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
                placeholder="Guests"
                type="number"
                value={guests}
                min="0"
                onChange={handleGuestChange}
              ></input>
            </div>
          </div>

          <div className="flex hover:bg-hover focus-within:bg-hover rounded-full transition-all duration-200">
            <Button
              onClick={handleSubmit}
              className="p-4"
              type="circle"
            >
              <Search size={20} color="white"/>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="transition-all mx-20 duration-300 hover:bg-background hover:shadow-md border border-input
         hover:text-baseText p-2 px-3 w-fit rounded-full cursor-pointer text-sm font-bold"
        >
          <div className="flex items-center justify-between gap-2">
            {/* <ArrowUpDown size={18}/> */}
            <p>Sort by</p>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;

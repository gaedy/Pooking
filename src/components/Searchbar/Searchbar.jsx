import Button from "../Button/Button";
import location from "/src/assets/icons/location.svg";
import guest from "/src/assets/icons/guest.svg";
import { rentCardsData } from "../../api/cards/rentCardsData";
import { useState } from "react";
import { CalendarSearch, CircleXIcon, Search } from "lucide-react";

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
      <div className="flex flex-col  justify-center items-center gap-10 h-fit ">
        <div className="font-bold md:text-3xl text-xl flex justify-center items-center text-pretty">
          Find your next stay ...
        </div>

        <div
          className=" rounded-[1.8rem] md:rounded-full mx-2 flex-shrink h-fit md:w-fit w-11/12 flex md:flex-row flex-col justify-center items-center text-xs font-semibold
         p-2 gap-1 bg-background hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300"
        >
          <div className="md:w-full w-full relative group ">
            <input
              className="md:w-full pr-10 p-4 w-full shrink border border-input hover:bg-hover placeholder-alternateText transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none "
              placeholder="Search here"
              value={search}
              onChange={handleSearchChange}
            ></input>
            {search !== "" && (
              <div
                className="absolute right-3 top-1/4 scale-75 cursor-pointer opacity-75 hover:opacity-100"
                onClick={handleClear}
              >
                <CircleXIcon />
              </div>
            )}
          </div>

          <div className="flex hover:bg-hover p-4 h-fit md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group">
            <div className="flex flex-row  text-nowrap justify-between items-center ">
              <img
                className="w-4 pointer-events-none select-none"
                src={location}
              ></img>

              {/* <DropSelect
                label="Select location"
                content={
                  <>
                    {rentCardsData.map((card) => (
                      <Select key={card.id} text={card.location}></Select>
                    ))}
                  </>
                }
              >
                <div className="flex items-center justify-between gap-2 px-2 pr-4">
                  <div>
                    <p>Select location</p>
                  </div>

                  <ChevronDown size={14} className="scale-110" />
                </div>

                
              </DropSelect> */}
              <select className="group-hover:bg-hover bg-background mr-3 transition-all duration-200 focus-within:bg-hover rounded-full outline-none">
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
                className="group-hover:bg-hover px-2 mr-2 w-20 transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none"
                placeholder="Guests"
                type="number"
                value={guests}
                min="0"
                onChange={handleGuestChange}
                max="20"
              ></input>
            </div>
          </div>

          <div className="flex hover:bg-hover focus-within:bg-hover rounded-full transition-all duration-200">
            <Button onClick={handleSubmit} className="p-4" type="circle">
              <Search size={20} color="white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;

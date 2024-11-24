import Button from "../Button/Button";
import guest from "/src/assets/icons/guest.svg";
import { rentCardsData } from "../../api/cards/rentCardsData";
import { useState } from "react";
import {
  CalendarSearch,
  ChevronDown,
  CircleXIcon,
  MapPin,
  Search,
} from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";
import { buyCardsData } from "../../api/cards/buyCardsData";
import { sellCardsData } from "../../api/cards/sellCardsData";

function Searchbar({ setSearchTerm, setGuestNmuber, setLocationTerm }) {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState("");
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState("");

  const handleLocationSelect = (location) => {
    setLocation(location);
  };

  const cardsData = [...rentCardsData, ...buyCardsData, sellCardsData];

  const handleSubmit = () => {
    setSearchTerm(search);
    setGuestNmuber(guests);
    setLocationTerm(location);
  };

  const handleAllClear = () => {
    setSearchTerm("");
    setSearch("");

    setGuestNmuber(0);
    setGuests("");

    setLocation("");
    setLocationTerm("");
  };

  const handleLocationClear = () => {
    setLocation("");
    setLocationTerm("");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value === "") {
      handleAllClear();
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
      <div className="flex flex-col w-full justify-center items-center gap-10 h-fit ">
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
                onClick={handleAllClear}
              >
                <CircleXIcon color="var(--redColorHover)" />
              </div>
            )}
          </div>

          <DropSelect
            label="Select location"
            position="left"
            hight="fixed"
            className="w-52 "
            content={
              <>
                <div className="overflow-auto w-full">
                  <Select
                    text="USA"
                    onClick={() => handleLocationSelect("USA")}
                  ></Select>
                  {cardsData.map((card) => (
                    <Select
                      key={card.id}
                      onClick={() => handleLocationSelect(card.location)}
                      text={card.location}
                    ></Select>
                  ))}
                </div>
              </>
            }
          >
            <div
              className={`flex hover:bg-hover ${
                location !== "" && "bg-hover shadow-lg"
              }  p-4 h-fit md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group`}
            >
              <div className="flex  gap-2 flex-row text-nowrap justify-between items-center  ">
                <MapPin size={16} />

                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p>{location || "Select Location"}</p>
                  </div>
                </div>

                {location === "" ? (
                  <ChevronDown size={16} className="scale-110" />
                ) : (
                  <>
                    <div className="opacity-75 cursor-pointer hover:opacity-100">
                      <CircleXIcon
                        color="var(--redColorHover)"
                        size={16}
                        onClick={handleLocationClear}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </DropSelect>

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

          <div
            className={`flex hover:bg-hover ${
              guests !== "" && "bg-hover shadow-lg"
            } p-4 md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group`}
          >
            <div className="flex flex-row justify-start items-center gap-1">
              <img
                className="w-4 pointer-events-none select-none"
                src={guest}
              ></img>

              <input
                className={`group-hover:bg-hover ${
                  guests !== "" && "bg-hover"
                } px-2 mr-2 w-20 transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none`}
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

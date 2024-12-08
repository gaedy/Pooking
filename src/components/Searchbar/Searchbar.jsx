import Button from "../Button/Button";
import { useState } from "react";
import {
  CalendarSearch,
  ChevronDown,
  CircleXIcon,
  House,
  MapPin,
  Search,
} from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";
import { useTranslation } from "react-i18next";
import Tooltip from "../Tooltip/Tooltip";
import { useNotification } from "../../hooks/useNotification";
import NotifAlert from "../Notification/NotifAlert";
import { animated, useSpring } from "@react-spring/web";
import useDataFetch from "../../hooks/useDataFetch";

function Searchbar({ setSearchTerm, setGuestNumber, setLocationTerm }) {
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState("");
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState("");

  const { t } = useTranslation();

  const handleLocationSelect = (location) => {
    setLocation(location);
  };

  const { rentCards, buyCards, sellCards } = useDataFetch();

  const cards = [...rentCards, ...buyCards, ...sellCards];

  const handleSubmit = () => {
    setSearchTerm(search);
    setGuestNumber(guests);
    setLocationTerm(location);
  };

  const handleAllClear = () => {
    setSearchTerm("");
    setSearch("");

    setGuestNumber(0);
    setGuests("");

    setLocation("");
    setLocationTerm("");
    handleNotification();
  };

  const handleLocationClear = (e) => {
    e.stopPropagation();
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
      setGuestNumber("");
    }
  };

  const { isNotification, handleNotification, setIsNotification } =
    useNotification();

  const s = useSpring({
    from: { opacity: 0, y: -60 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 190, friction: 14 },
  });

  return (
    <>
      <div className="flex flex-col flex-wrap w-full justify-center items-center gap-10 h-fit ">
        <animated.div
          style={s}
          className="font-bold md:text-3xl text-xl flex justify-center items-center text-pretty"
        >
          {/* Find your next stay ... */}
          {t("frontWelcome")}
        </animated.div>

        {isNotification && (
          <NotifAlert
            onClosing={() => setIsNotification(false)}
            message="Cleared"
          />
        )}

        <div
          className=" rounded-[1.8rem] md:rounded-full mx-2 flex-shrink h-fit md:w-fit w-11/12 flex md:flex-row flex-col justify-center items-center text-xs font-semibold
         p-2 gap-1 bg-background hover:shadow-lg focus-within:shadow-lg transition-shadow duration-300"
        >
          <div className="md:w-full w-full relative group">
            <input
              className={`md:w-full ${
                search !== "" && "shadow-lg bg-hover"
              } pr-10 p-4 w-full shrink border border-input hover:bg-hover placeholder-alternateText transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none `}
              placeholder={t('searchbar.search1')} 
              value={search}
              onChange={handleSearchChange}
            ></input>
            {search !== "" && (
              <div
                className="absolute right-4 top-0 translate-y-4 scale-100 cursor-pointer opacity-75 hover:opacity-100"
                onClick={handleAllClear}
              >
                <Tooltip
                  text={t('searchbar.search2')} 
                  className="-translate-x-10 md:-translate-x-0"
                >
                  <CircleXIcon size={16} color="var(--redColorHover)" />
                </Tooltip>
              </div>
            )}
          </div>

          <div className="md:w-fit w-full">
            <DropSelect
              label={t('searchbar.search3')} 
              position="left"
              hight="fixed"
              className="md:w-60 w-full"
              content={
                <>
                  <div className="overflow-auto w-full ">
                    <Select
                      text="USA"
                      onClick={() => handleLocationSelect("USA")}
                    ></Select>
                    {cards.map((card) => (
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
                <div className="flex gap-2 flex-row text-nowrap justify-between items-center">
                  <MapPin size={16} />

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p>{location || t('searchbar.search4') }</p>
                    </div>
                  </div>

                  {location === "" ? (
                    <ChevronDown size={16} className="scale-110" />
                  ) : (
                    <>
                      <div className="opacity-75 cursor-pointer hover:opacity-100">
                        <Tooltip text={t('searchbar.search5')} >
                          <CircleXIcon
                            color="var(--redColorHover)"
                            size={16}
                            onClick={handleLocationClear}
                          />
                        </Tooltip>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </DropSelect>
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

          <div
            className={`flex hover:bg-hover ${
              guests !== "" && "bg-hover shadow-lg"
            } p-4 md:w-fit w-full border border-input focus-within:bg-hover rounded-full transition-all duration-200 group`}
          >
            <div className="flex flex-row justify-start items-center gap-1">
              {/* <img
                className="w-4 pointer-events-none select-none"
                src={guest}
              ></img> */}
              <House size={16} />

              <input
                className={`group-hover:bg-hover ${
                  guests !== "" && "bg-hover"
                } px-2 mr-2 w-20 transition-all duration-200 focus-within:bg-hover bg-background rounded-full outline-none`}
                placeholder={t('searchbar.search6')} 
                type="number"
                value={guests}
                min="0"
                onChange={handleGuestChange}
                max="20"
              ></input>
            </div>
          </div>

          <div className="flex hover:bg-hover focus-within:bg-hover  rounded-full transition-all duration-200">
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

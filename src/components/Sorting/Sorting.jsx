import { ArrowUpWideNarrow, ChevronDown, CircleXIcon } from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";
import { useState } from "react";
import useDataFetch from "../../hooks/useDataFetch";

function Sorting({ setRatingTerm }) {
  const [topRated, setTopRated] = useState("");
  const [ratingNumber, setRatingNumber] = useState(9);

  // const { rentCards, buyCards, sellCards } = useDataFetch();

  // const cards = {...rentCards, ...buyCards, ...sellCards};
  // const sortedCards = Object.values(cards).sort((a, b) => b.rate - a.rate);

  const handleSortingSelect = (topRated) => {
    setTopRated(topRated);
    setRatingTerm(ratingNumber);
  };
  const handleSortingClear = (e) => {
    e.stopPropagation();
    setTopRated("");
    setRatingTerm(0);
  };

  return (
    <div
      className={`transition-all duration-300 hover:bg-background  border border-input
         hover:text-baseText p-2 ${
           topRated !== "" && "bg-background shadow-lg"
         }  px-3 w-fit rounded-full cursor-pointer text-sm font-bold`}
    >
      <DropSelect
        size="med"
        label="Choose one"
        className=""
        content={
          <>
            <Select
              text="Top Rated"
              icon={<ArrowUpWideNarrow size={22} />}
              onClick={() => handleSortingSelect("Top Rated")}
            />
          </>
        }
      >
        <div className="flex items-center justify-between gap-2">
          <p>{topRated || "Sort by"}</p>

          {topRated === "" ? (
            <ChevronDown
              size={18}
              className={` transition-transform duration-200}`}
            />
          ) : (
            <>
              <div className="opacity-75 cursor-pointer hover:opacity-100">
                <CircleXIcon
                  color="var(--redColorHover)"
                  size={16}
                  onClick={handleSortingClear}
                />
              </div>
            </>
          )}
        </div>
      </DropSelect>
    </div>
  );
}

export default Sorting;

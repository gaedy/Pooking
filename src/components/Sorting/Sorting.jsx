import { ArrowUpWideNarrow, ChevronDown } from "lucide-react";
import DropSelect from "../DropSelect/DropSelect";
import Select from "../DropSelect/Select";

function Sorting() {
  return (
    <div
      className="transition-all duration-300 hover:bg-background hover:shadow-md border border-input
         hover:text-baseText p-2 px-3 w-fit rounded-full cursor-pointer text-sm font-bold"
    >
      <DropSelect
        size="med"
        label="Choose one"
        content={
          <>
            <Select text="Top Rated" icon={<ArrowUpWideNarrow size={22} />} />
          </>
        }
      >
        <div className="flex items-center justify-between gap-2">
          <p>Sort by</p>
          <ChevronDown
            size={18}
            className={` transition-transform duration-200
                  
                }`}
          />
        </div>
      </DropSelect>
    </div>
  );
}

export default Sorting;

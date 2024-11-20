import { ChevronDown, CircleDollarSign, Globe } from "lucide-react";
import DropSelect from "../../components/DropSelect/DropSelect";
import Select from "../../components/DropSelect/Select";
import { useState } from "react";

function General() {
  const [changeLang, setChangeLang] = useState("English (US)"); // make it global
  return (
    <>
      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <Globe size={16} />
          <p>Change Language</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select
                text="English"
                onClick={() => setChangeLang("English (US)")}
              />
              <Select
                text="Arabic"
                onClick={() => setChangeLang("Arabic (EG)")}
              />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>{changeLang}</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <CircleDollarSign size={16} />
          <p>Currncey</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select text="USD" />
              <Select text="EUR" />
              <Select text="EGP" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>USD</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>
    </>
  );
}

export default General;

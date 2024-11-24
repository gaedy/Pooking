import {
  ChevronDown,
  LayoutDashboard,
  LetterText,
  MoonIcon,
  PaintBucket,
  Type,
} from "lucide-react";
import DropSelect from "../../components/DropSelect/DropSelect";
import Select from "../../components/DropSelect/Select";

function Appearance() {
  return (
    <>
      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <MoonIcon size={16} />
          <p>Change Theme</p>
        </div>

        <DropSelect
          position="right"
          className="w-fit"
          content={
            <>
              <Select text="Light" />
              <Select text="Dark" />
              <Select text="System" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Light</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <Type size={16} />
          <p>Font Style</p>
        </div>

        <DropSelect
          position="right"
          className="w-36"
          content={
            <>
              <div className="w-full font-fontEnglishJost">
                <Select text="Jost" />
              </div>

              <div className="font-fontEnglishArial w-full">
                <Select text="Arial" />
              </div>

              <div className="w-full font-fontEnglishSystem">
                <Select text="System UI" />
              </div>
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Inter</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <LetterText size={16} />
          <p>Font Size</p>
        </div>

        <DropSelect
          position="right"
          className="w-36"
          content={
            <>
              <Select text="change size" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Base</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <PaintBucket size={16} />
          <p>Accent Color</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select text="Green" />
              <Select text="Red" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Blue</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <LayoutDashboard size={16} />
          <p>Layout View</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select text="Compact View" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Expanded View</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>
    </>
  );
}

export default Appearance;

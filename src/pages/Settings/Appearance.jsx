import { ChevronDown, MoonIcon } from "lucide-react"
import DropSelect from "../../components/DropSelect/DropSelect"
import Select from "../../components/DropSelect/Select"

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

      
    </>
  )
}

export default Appearance
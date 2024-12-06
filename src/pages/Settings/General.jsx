import { ChevronDown, CircleDollarSign, House, Languages } from "lucide-react";
import DropSelect from "../../components/DropSelect/DropSelect";
import Select from "../../components/DropSelect/Select";
import useCurrency from "../../hooks/useCurrency";
import useLanguage from "../../hooks/useLanguage";
import { EGIcon, EURIcon, UKIcon, USIcon } from "./someIcons/icons";

function General() {
  const { currentLanguage, changeLanguage } = useLanguage();

  const { setCurrencyHandler, selectedCurrency } = useCurrency();

  return (
    <>
      <div className="flex justify-between md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <Languages size={16} />
          <p>Default Language</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select
                text="English (US)"
                onClick={() => changeLanguage("en")}
              />
              <Select
                text="(مصر) العربية"
                onClick={() => changeLanguage("ar")}
              />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>{currentLanguage !== "ar" ? "English (US)" : "(مصر) العربية"}</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <CircleDollarSign size={16} />
          <p>Currency</p>
        </div>

        <DropSelect
          position="right"
          className="w-fit"
          content={
            <>
              <Select
                text="Default"
                onClick={() => setCurrencyHandler("Default")}
                icon={<USIcon />}
              />
              {/* <Select text="EUR" /> */}

              <Select
                onClick={() => setCurrencyHandler("EGP")}
                text="EGP"
                icon={<EGIcon />}
              />

              <Select
                onClick={() => setCurrencyHandler("EUR")}
                text="EUR"
                icon={<EURIcon />}
              />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-2 justify-between">
            <p>
              {selectedCurrency === "EGP" ? (
                <EGIcon />
              ) : selectedCurrency === "EUR" ? (
                <EURIcon />
              ) : (
                <USIcon />
              )}
            </p>
            <p>{selectedCurrency || "Default"}</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <House size={16} />
          <p>Default Page</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select text="Rent" />
              <Select text="Buy" />
              <Select text="Sell" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>Rent</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>
    </>
  );
}

export default General;

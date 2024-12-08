import { ChevronDown, CircleDollarSign, House, Languages } from "lucide-react";
import DropSelect from "../../components/DropSelect/DropSelect";
import Select from "../../components/DropSelect/Select";
import useCurrency from "../../hooks/useCurrency";
import useLanguage from "../../hooks/useLanguage";
import { EGIcon, USIcon } from "./someIcons/icons";
import { useTranslation } from "react-i18next";

function General() {
  const { currentLanguage, handleLanguageChange } = useLanguage();
  const { setCurrencyHandler, selectedCurrency } = useCurrency();

  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-between md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <Languages size={16} />
          <p>{t("settings.gen1")}</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select
                text="English (US)"
                onClick={() => handleLanguageChange("en")}
                icon={<USIcon />}
              />
              <Select
                text="(مصر) العربية"
                onClick={() => handleLanguageChange("ar")}
                icon={<EGIcon />}
              />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-3 items-center rounded-full flex gap-2 justify-around">
            <p>{currentLanguage !== "ar" ? <USIcon /> : <EGIcon />}</p>
            <p>{currentLanguage !== "ar" ? "English (US)" : "(مصر) العربية"}</p>

            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <CircleDollarSign size={16} />
          <p>{t("settings.gen2")}</p>
        </div>

        <DropSelect
          position="right"
          className="w-fit"
          content={
            <>
              <Select
                text="Default"
                onClick={() => setCurrencyHandler("Default")}
              />
              {/* <Select text="EUR" /> */}

              <Select onClick={() => setCurrencyHandler("EGP")} text="EGP" />

              <Select onClick={() => setCurrencyHandler("EUR")} text="EUR" />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-between">
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

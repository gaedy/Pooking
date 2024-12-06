import {
  ChevronDown,
  LayoutDashboard,
  Moon,
  MoonIcon,
  PaintBucket,
  Sun,
  Type,
} from "lucide-react";
import DropSelect from "../../components/DropSelect/DropSelect";
import Select from "../../components/DropSelect/Select";
import { useDispatch } from "react-redux";
import { setFont } from "../../features/changeFont/fontSlice";
import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

function Appearance() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const changeFont = (newFont) => {
    dispatch(setFont(newFont));
  };

  const { isDarkTheme, handleSetTheme } = useTheme();

  const selectedFont = localStorage.getItem("font");

  const [isFont, setIsFont] = useState(() => {
    switch (selectedFont) {
      case "font-fontEnglishJost":
        return "Jost";
      case "font-fontEnglishInter":
        return t('settings.app4');
      case "font-fontEnglishArial":
        return "Arial";
      case "font-fontEnglishSystem":
        return "System default";
      default:
        break;
    }
  });

  const handleJost = () => {
    changeFont("font-fontEnglishJost");
    setIsFont("Jost");
  };
  const handleArial = () => {
    changeFont("font-fontEnglishArial");
    setIsFont("Arial");
  };
  const handleSystemUI = () => {
    changeFont("font-fontEnglishSystem");
    setIsFont("System default");
  };
  const handleDefaultFont = () => {
    changeFont("font-fontEnglishInter");
    setIsFont(t('settings.app4'));
  };

  

  return (
    <>
      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center flex gap-2 justify-around">
          <MoonIcon size={16} />
          <p>{t("settings.app1")}</p>
        </div>

        <DropSelect
          position="right"
          className="w-full"
          content={
            <>
              <Select
                icon={<Sun size={16} />}
                onClick={() => handleSetTheme(false)}
                text={t("settings.app2")}
              />
              <Select
                icon={<Moon size={16} />}
                onClick={() => handleSetTheme(true)}
                text={t("settings.app2_1")}
              />
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>
              {isDarkTheme ? (
                <div className="flex items-center gap-2">
                  <Moon size={16} />
                  <p>{t("settings.app2_1")}</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sun size={16} />
                  <p>{t("settings.app2")}</p>
                </div>
              )}
            </p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
        <div className=" items-center  flex gap-2 justify-around">
          <Type size={16} />
          <p>{t("settings.app3")}</p>
        </div>

        <DropSelect
          position="right"
          className="w-40"
          content={
            <>
              <div
                onClick={handleDefaultFont}
                className="w-full font-fontEnglishInter"
              >
                <Select text={t('settings.app4')} />
              </div>

              <div onClick={handleJost} className="w-full font-fontEnglishJost">
                <Select text="Jost font" />
              </div>

              <div
                onClick={handleArial}
                className="font-fontEnglishArial w-full"
              >
                <Select text="Arial font" />
              </div>

              <div
                onClick={handleSystemUI}
                className="w-full font-fontEnglishSystem"
              >
                <Select text="System default" />
              </div>
            </>
          }
        >
          <div className="bg-hover2 hover:bg-border cursor-pointer transition-all p-2 px-4 items-center rounded-full flex gap-1 justify-around">
            <p>{isFont || t("settings.app4") }</p>
            <ChevronDown size={18} />
          </div>
        </DropSelect>
      </div>

      {/* <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
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
      </div> */}

      {/* <div className="flex justify-between  md:flex-row md:items-center gap-2 items-start flex-col transition-all duration-300 hover:text-baseText  font-medium">
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
      </div> */}
    </>
  );
}

export default Appearance;

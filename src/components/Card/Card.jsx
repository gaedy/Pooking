import { useNavigate } from "react-router-dom";
import Like from "../Like/Like";
import Rating from "../Rating/Rating";
import Tooltip from "../Tooltip/Tooltip";
import img00 from "/src/assets/img/img00.jpg";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useTransition } from "react";
import useCurrency from "../../hooks/useCurrency";
import { animated, useSpring } from "@react-spring/web";

function Card({
  title = "Add Title Here",
  location = "Add location here",
  currency = "EGP",
  price = "200",
  rate,
  reviews = 100,
  thumbnail = img00,
  thumbnails,
  propertyType,
  per,
  id,
  status,
}) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    const betterURLTitle = title.replace(/\s+/g, "_").toLowerCase();
    navigate(`detailed-card/${id}/${betterURLTitle}`);
  };

  const [currentThumbnail, setCurrentThumbnail] = useState(0);

  const thumbnailKey = Object.keys(thumbnails);

  const handleNextThumbnail = () => {
    setCurrentThumbnail((prevIndex) =>
      prevIndex < thumbnailKey.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevThumbnail = () => {
    setCurrentThumbnail((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : thumbnailKey.length - 1
    );
  };

  const imgSrc =
    currentThumbnail === 0
      ? thumbnail
      : thumbnails[thumbnailKey[currentThumbnail]];

  const { isEGPCurrency } = useCurrency();

  const animation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.95)" },
    config: { duration: 50, tension: 10 },
  });

  return (
    <>
      <animated.div
        style={animation}
        className="group w-72 bg-background hover:shadow-xl  transition-all cursor-pointer duration-300 h-80 rounded-3xl flex flex-col items-center gap-2 p-2"
      >
        <div className=" h-56 w-full relative">
          <img
            className="object-cover transition-all dark:brightness-[70%] select-none duration-200 group-hover:brightness-[80%] rounded-2xl w-full h-full absolute pointer-events-none"
            src={imgSrc}
          ></img>

          <div className=" flex-col flex justify-between h-full text-sm  text-baseText font-semibold p-2 gap-2 group">
            <div className="flex items-center justify-between">
              {rate && (
                <div className="bg-white dark:bg-zinc-900 p-1 px-2 rounded-full backdrop-filter dark:backdrop-filter backdrop-blur-md dark:backdrop-blur-md bg-opacity-60 dark:bg-opacity-60">
                  <Rating
                    rate={rate.toPrecision(2)}
                    reviews={reviews.toLocaleString()}
                  />
                </div>
              )}

              {status && (
                <div className="bg-white dark:bg-zinc-800 p-1 px-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-70 dark:backdrop-blur-md dark:bg-opacity-70">
                  {/* <p className="text-baseText">{status === "Available" ? "text-white" : status}</p> */}
                  <p
                    className={`${
                      status === "Available"
                        ? "dark:text-green-400 text-green-700 "
                        : "dark:text-red-400 text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                </div>
              )}
              <Tooltip text="Save">
                <div className="bg-white dark:bg-zinc-900 p-2 rounded-full dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-60 backdrop-filter backdrop-blur-md bg-opacity-60">
                  <Like />
                </div>
              </Tooltip>
            </div>

            <div className="group-hover:flex md:hidden flex justify-between items-center z-10">
              <div
                className="bg-white dark:bg-zinc-900 p-2 rounded-full dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-60 backdrop-filter backdrop-blur-md bg-opacity-60 active:scale-95 transition-transform"
                onClick={handlePrevThumbnail}
              >
                <ChevronLeft size={16} />
              </div>

              <div
                className="bg-white dark:bg-zinc-900 p-2 rounded-full dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-60 backdrop-filter backdrop-blur-md bg-opacity-60 active:scale-95 transition-transform"
                onClick={handleNextThumbnail}
              >
                <ChevronRight size={16} />
              </div>
            </div>

            <div
              onClick={handleDetailsClick}
              className="bg-white dark:bg-zinc-900 select-none p-2 gap-1 hover:underline px-2 w-full  md:hidden flex group-hover:flex items-center justify-center rounded-full dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50 backdrop-filter backdrop-blur-md bg-opacity-60"
            >
              <p>Click For Details</p>
              <ArrowUpRight className="" size={18} />
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 rounded-md select-none">
          <div className="h-full  flex flex-col justify-between gap-0 py-2">
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-start ">
                <h1 className="text-lg font-bold  text-ellipsis overflow-hidden">
                  {title}
                </h1>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-alternateText">{location}</p>
                </div>
              </div>
            </div>

            {/* <div className=" text-sm flex items-center">tags</div> */}

            <div className="text-base flex px-0 gap-1 justify-start items-center font-bold">
              <p className="text-button">
                {!isEGPCurrency ? (
                  <>
                    {currency} {price.toLocaleString()}
                  </>
                ) : (
                  <>
                    {"EGP"} {(price * 49).toLocaleString()}
                  </>
                )}
              </p>

              <p className="text-alternateText text-xs font-medium"> {per}</p>

              {propertyType && (
                <p className=" ml-auto text-greenColor bg-hover p-1 px-3 rounded-full text-xs font-medium">
                  {propertyType}
                </p>
              )}
            </div>

            {/* <div className="flex items-center justify-between gap-4 text-sm font-semibold ">
              <div className=" ">
                
              </div>
              <div>
                <Button text="Virtual Tour" />
              </div>

            </div> */}
          </div>
        </div>
      </animated.div>
    </>
  );
}

export default Card;

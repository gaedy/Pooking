
import Like from "../Like/Like";
import Rating from "../Rating/Rating";
import Tooltip from "../Tooltip/Tooltip";

import img00 from "/src/assets/img/img00.jpg";

function Card({
  title = "Add Title Here",
  location = "Add location here",
  currency = "EGP",
  price = "200",
  rate,
  reviews = 100,
  thumbnail = img00,
  propertyType,
  per,
  status,
}) {
  return (
    <>
      
        <div className="group w-72 bg-background hover:shadow-lg transition-all cursor-pointer duration-300 h-80 rounded-3xl flex flex-col items-center gap-2 p-2">
          <div className=" h-56 w-full relative group">
            <img
              className="object-cover transition-all duration-200 group-hover:brightness-[80%] rounded-2xl w-full h-full absolute pointer-events-none"
              src={thumbnail}
            ></img>
            {/* <div>fgfgj</div> */}
            <div className="  flex items-center  justify-between text-sm  text-baseText font-semibold p-2  gap-2">
              {/* <div className="bg-white p-1 px-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
              <Verified></Verified>
            </div> */}
              {rate && (
                <div className="bg-white p-1 px-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
                  <Rating rate={rate.toPrecision(2)} reviews={reviews} />
                </div>
              )}

              {status && (
                <div className="bg-white p-1 px-3 rounded-full backdrop-filter backdrop-blur-md bg-opacity-70">
                  {/* <p className="text-baseText">{status === "Available" ? "text-white" : status}</p> */}
                  <p
                    className={`${
                      status === "Available"
                        ? "text-greenColor "
                        : "text-redColor"
                    }`}
                  >
                    {status}
                  </p>
                </div>
              )}

              <Tooltip text="Save">
                <div className="bg-white p-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
                  <Like />
                </div>
              </Tooltip>
            </div>
          </div>

          <div className="w-full h-1/2 rounded-md">
            <div className="h-full  flex flex-col justify-between gap-2 py-2">
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

              <div className="text-base flex px-1 gap-1 justify-start items-center font-bold">
                <p className="text-buttonHover2">
                  {currency} {price}
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
                <Button type="outline" text="Open Map" />
              </div>
              <div>
                <Button text="Virtual Tour" />
              </div>

            </div> */}
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Card;

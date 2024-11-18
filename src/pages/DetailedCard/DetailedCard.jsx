import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BedDoubleIcon, HouseIcon, MapPin, X } from "lucide-react";
import Rating from "../../components/Rating/Rating";
import Tooltip from "../../components/Tooltip/Tooltip";
import GridImages from "./GridImages";

function DetailedCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    rentCardsData = [],
    buyCardsData = [],
    sellCardsData = [],
  } = useOutletContext();

  const card = [...rentCardsData, ...buyCardsData, ...sellCardsData].find(
    (item) => item.id === parseInt(id)
  );

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="fixed w-full h-full overflow-auto bg-hover z-20 gap-4 inset-0 flex flex-col items-start p-5">
        <div className="flex w-full justify-between items-center">
          <h1 className="md:text-3xl text-xl font-semibold">{card.title}</h1>

          <Tooltip text="Close">
            <Button onClick={handleClose} type="circle" className="p-2 ">
              <X color="white" size={22} />
            </Button>
          </Tooltip>
        </div>

        {/* 
        <div className=" w-full  h-4/6 rounded-2xl">
          <div className="grid grid-cols-3 h-full w-full grid-rows-2 rounded-3xl gap-3">
            <div className="row-span-2 rounded-lg">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={card.thumbnail}
              ></img>
            </div>

            <div className=" rounded-lg">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={card.thumbnail}
              ></img>
            </div>
            <div className=" rounded-lg">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={card.thumbnail}
              ></img>
            </div>
            <div className="col-start-2 rounded-lg">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={card.thumbnail}
              ></img>
            </div>
            <div className="col-start-3  rounded-lg">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={card.thumbnail}
              ></img>
            </div>
          </div>
        </div> */}

        {card.thumbnails ? (
          <GridImages card={card} />
        ) : (
          <p>no thumbnails prop in api</p>
        )}

        <div className="flex-col md:flex-row flex gap-6 w-full md:w-full justify-between">
          <div className="flex flex-col justify-start w-full gap-2">
            <p className="text-lg flex justify-start gap-2 ">
              <MapPin />
              {card.location}

              <div className="flex flex-col"></div>
            </p>

            <div className="flex  items-center pb-3">
              {card.guests ? (
                <>
                  <div className="flex gap-2 items-center">
                    <HouseIcon />
                    <p className="">{card.guests} Guests</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2">
                    <BedDoubleIcon />
                    <p className="">{card.bedrooms} Bedrooms</p>
                  </div>
                </>
              )}

              <p className="flex px-4 flex-row justify-center items-center gap-2">
                {card.features &&
                  card.features.map((f, index) => (
                    <>
                      <p key={index}>
                        <div className="bg-hover2 rounded-full p-1 px-3 text-sm font-bold">
                          {f}
                        </div>
                      </p>
                    </>
                  ))}
              </p>
            </div>

            {card.rate && (
              <div className="flex gap-0">
                <Rating />
                <div className="flex gap-1 items-center flex-wrap">
                  <p className="font-bold"> {card.rate.toPrecision(2)}</p>
                  <p className="font-medium bg-hover2 px-2 py-1 rounded-full text-sm">
                    {card.rate >= 9
                      ? "Wonderful"
                      : card.rate >= 8
                      ? "Very Good"
                      : card.rate >= 7
                      ? "Good"
                      : "Acceptable"}
                  </p>
                  <p className="font-medium underline cursor-pointer">
                    {card.reviews} reviews
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 flex-col flex items-start md:items-end ">
            <div className="flex gap-1 pb-2">
              {card.price && (
                <>
                  <p className="text-xl font-medium">
                    {card.price}
                    {card.currency === "USD"
                      ? "$"
                      : card.currency === "EUR"
                      ? "€"
                      : card.currency === "CAD"
                      ? "$"
                      : ""}
                  </p>
                  <p className="text-xl font-medium">{card.currency}</p>
                </>
              )}
              {card.askingPrice && (
                <>
                  <p className="text-xl font-medium">
                    {card.askingPrice}
                    {card.currency === "USD"
                      ? "$"
                      : card.currency === "EUR"
                      ? "€"
                      : card.currency === "CAD"
                      ? "$"
                      : ""}
                  </p>
                  <p className="text-xl font-medium">{card.currency}</p>
                </>
              )}
            </div>

            {card.checkIn && (
              <div className="bg-hover2 w-fit p-4 gap-4 flex flex-col items-start rounded-2xl">
                {/* <Calendar /> */}
                <div className="flex flex-row gap-2 text-sm font-bold items-center w-full justify-between flex-wrap ">
                  <p className="bg-green-300 p-1 px-3 rounded-full">Check In</p>
                  <p className="font-semibold">{card.checkIn}</p>
                </div>

                <div className="flex flex-row gap-2 items-center text-sm font-bold w-full justify-between flex-wrap ">
                  <p className="bg-red-300 p-1 px-3 rounded-full">Check Out</p>
                  <p className="font-semibold">{card.checkOut}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;

import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { BedDoubleIcon, CircleUser, HouseIcon, MapPin, X } from "lucide-react";
import Rating from "../../components/Rating/Rating";
import Tooltip from "../../components/Tooltip/Tooltip";
import GridImages from "./GridImages";
import { useEffect, useState } from "react";
import { fetchReviews } from "../../api/api";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";
import useCurrency from "../../hooks/useCurrency";
import { animated, useSpring } from "@react-spring/web";

function DetailedCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theReviews, setTheReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { isEGPCurrency } = useCurrency();

  const {
    rentCardsData = [],
    buyCardsData = [],
    sellCardsData = [],
  } = useOutletContext();

  const card = [...rentCardsData, ...buyCardsData, ...sellCardsData].find(
    (item) => item.id.toString() === id.toString()
  );

  useEffect(() => {
    setIsLoading(true);
    fetchReviews().then((reviewsData) => {
      const reviewsByCardID = reviewsData.filter(
        (review) => review.cardId === card.id
      );

      setTheReviews(reviewsByCardID);

      setIsLoading(false);
    });
  }, [card.id]);

  const handleClose = () => {
    navigate(-1);
  };

  const detailedPageAnimation = useSpring({
    opacity: 1,
    y: 0,
    transform: "scale(1)",
    from: { opacity: 0, y: 40, transform: "scale(0.60)" },
    config: { duration: 80 },
  });

  return (
    <>
      <animated.div
        style={detailedPageAnimation}
        className="fixed w-full bg-slate-300 dark:bg-zinc-800 px-2 
        backdrop-filter dark:backdrop-filter backdrop-blur-3xl dark:backdrop-blur-3xl bg-opacity-80 
        dark:bg-opacity-80 h-full overflow-auto bg-hover z-20 gap-4 inset-0 flex flex-col items-start p-5"
      >
        <div className="flex w-full justify-between items-center">
          <h1 className="md:text-3xl text-xl font-semibold">{card.title}</h1>

          <Tooltip text="Close">
            <Button onClick={handleClose} type="circle" className="p-2 ">
              <X color="white" size={22} />
            </Button>
          </Tooltip>
        </div>

        {card.thumbnails ? <GridImages card={card} /> : <p>no thumbnails</p>}

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
              {/* {(card.price || card.askingPrice) && (
                <>
                  <p className="text-xl font-medium">
                    {card.price
                      ? card.price.toLocaleString()
                      : card.askingPrice.toLocaleString()}

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
              )} */}
              {!isEGPCurrency
                ? (card.price || card.askingPrice) && (
                    <>
                      <p className="text-xl font-medium">
                        {card.currency === "USD"
                          ? "$"
                          : card.currency === "EUR"
                          ? "€"
                          : card.currency === "CAD"
                          ? "$"
                          : ""}
                        {card.price
                          ? card.price.toLocaleString()
                          : card.askingPrice.toLocaleString()}
                      </p>
                      <p className="text-xl font-medium">{card.currency}</p>
                    </>
                  )
                : (card.price || card.askingPrice) && (
                    <>
                      <p className="text-xl font-medium">
                        £
                        {card.price
                          ? (card.price * 49).toLocaleString()
                          : (card.askingPrice * 49).toLocaleString()}
                      </p>
                      <p className="text-xl font-medium">EGP</p>
                    </>
                  )}
            </div>

            {card.checkIn && (
              <div className="bg-background w-fit p-4 gap-4 flex flex-col items-start rounded-2xl">
                {/* <Calendar /> */}
                <div className="flex flex-row gap-2 text-sm font-bold items-center w-full justify-between flex-wrap ">
                  <p className="bg-green-300 dark:bg-green-900 p-1 px-3 rounded-full">
                    Check In
                  </p>
                  <p className="font-semibold">{card.checkIn}</p>
                </div>

                <div className="flex flex-row gap-2 items-center text-sm font-bold w-full justify-between flex-wrap ">
                  <p className="bg-red-300 dark:bg-red-900 p-1 px-3 rounded-full">
                    Check Out
                  </p>
                  <p className="font-semibold">{card.checkOut}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {card.reviews && (
          <div className="flex flex-col gap-3 md:w-1/2 w-full h-fit">
            <p className="text-lg font-bold">Top Reviews</p>

            {isLoading ? (
              <LoadingSpin />
            ) : theReviews.length > 0 ? (
              theReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-background rounded-lg p-3 gap-2  justify-center flex flex-col"
                >
                  <div className="flex justify-start gap-2 items-center text-sm font-bold flex-wrap">
                    <div className="rounded-full bg-hover p-1">
                      <CircleUser />
                    </div>

                    <p>{review.userName}</p>

                    <p className="text-alternateText">&bull;</p>

                    <div className="text-alternateText text-xs">
                      {review.date}
                    </div>
                  </div>
                  <div className="text-sm ">{review.comment}</div>
                </div>
              ))
            ) : (
              <p>No Reviews Found.</p>
            )}
          </div>
        )}
      </animated.div>
    </>
  );
}

export default DetailedCard;

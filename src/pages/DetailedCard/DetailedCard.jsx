import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  BedDoubleIcon,
  Blocks,
  CalendarArrowDown,
  CalendarArrowUp,
  CircleUser,
  CircleUserRound,
  Eye,
  HouseIcon,
  Mail,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Ruler,
  Scale3d,
  SquareUser,
  X,
} from "lucide-react";
import Rating from "../../components/Rating/Rating";
import Tooltip from "../../components/Tooltip/Tooltip";
import GridImages from "./GridImages";
import { useEffect, useMemo, useState } from "react";
import { getReviewsJSON } from "../../api/api";
import LoadingSpin from "../../components/LoadingSpin/LoadingSpin";
import useCurrency from "../../hooks/useCurrency";
import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";

function DetailedCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [theReviews, setTheReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isEGPCurrency } = useCurrency();
  const { t } = useTranslation();

  const {
    rentCardsData = [],
    buyCardsData = [],
    sellCardsData = [],
    savedCards = [],
  } = useOutletContext();

  const findCardById = (id, ...arrays) => {
    for (const array of arrays) {
      const found = array.find((item) => item.id === id);
      if (found) return found;
    }
    return null;
  };

  const card = useMemo(
    () =>
      findCardById(id, rentCardsData, buyCardsData, sellCardsData, savedCards),
    [id, rentCardsData, buyCardsData, sellCardsData, savedCards]
  );

  // const card = [
  //   ...rentCardsData,
  //   ...buyCardsData,
  //   ...sellCardsData,
  //   ...savedCards,
  // ].find((item) => item.id.toString() === id.toString());

  useEffect(() => {
    setIsLoading(true);
    getReviewsJSON()
      .then((reviewsData) => {
        const reviewsByCardID = reviewsData.filter(
          (review) => review.cardId.toString() === card.id.toString()
        );

        setTheReviews(reviewsByCardID);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [card]);

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

          <Tooltip text={t("detailedCard.close")}>
            <Button onClick={handleClose} type="circle" className="p-2 ">
              <X color="white" size={22} />
            </Button>
          </Tooltip>
        </div>

        {card.thumbnails ? (
          <GridImages card={card} />
        ) : (
          <p>{t("detailedCard.noImg")}</p>
        )}

        <div className="flex-col md:flex-row flex gap-8 w-full md:w-full justify-between">
          <div className="flex flex-col justify-start w-full gap-2">
            <p className="text-lg flex justify-start gap-2 ">
              <MapPin />
              {card.location}

              <div className="flex flex-col"></div>
            </p>

            <div className="flex items-center flex-wrap gap-2 pb-1">
              {card.guests ? (
                <>
                  <div className="flex gap-2 items-center">
                    <HouseIcon />
                    <p>{card.guests}</p>
                    <p>{t("detailedCard.g")}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2 items-center">
                    <BedDoubleIcon />
                    <p>{card.bedrooms}</p>
                    <p>{t("detailedCard.b")}</p>
                  </div>
                </>
              )}

              {card.propertyType && (
                <div
                  className="flex items-center text-greenColor w-fit justify-center 
                      bg-background p-1 px-3 text-sm font-bold rounded-full"
                >
                  <p>{card.propertyType}</p>
                </div>
              )}

              {card.status && (
                <div
                  className="flex items-center text-greenColor w-fit justify-center 
                    bg-background p-1 px-3 text-sm font-bold rounded-full"
                >
                  <p
                    className={
                      card.status === "Available"
                        ? "text-greenColorHover"
                        : "text-redColorHover"
                    }
                  >
                    {card.status}
                  </p>
                </div>
              )}

              <p className="flex flex-row justify-start items-center flex-wrap gap-2">
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

            {card.views && (
              <>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <Eye />
                      <p>{card.views}</p>
                    </div>
                    <p>{t("detailedCard.views")}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <MessageCircleQuestion />
                      <p>{card.inquiries}</p>
                    </div>
                    <p>{t("detailedCard.inq")}</p>
                  </div>
                </div>
              </>
            )}

            {card.rate && (
              <div className="flex">
                <Rating />
                <div className="flex gap-2 items-center flex-wrap">
                  <p className="font-bold"> {card.rate.toPrecision(2)}</p>
                  <p
                    className={`font-medium px-4 py-1 rounded-full text-white text-sm ${
                      card.rate >= 9
                        ? "bg-red-500"
                        : card.rate >= 8
                        ? "bg-green-600"
                        : card.rate >= 7
                        ? "bg-blue-600"
                        : "bg-slate-600"
                    }`}
                  >
                    {card.rate >= 9
                      ? t("detailedCard.rating1")
                      : card.rate >= 8
                      ? t("detailedCard.rating2")
                      : card.rate >= 7
                      ? t("detailedCard.rating3")
                      : t("detailedCard.rating4")}
                  </p>
                  <div className="font-medium underline cursor-pointer">
                    <p>
                      {card.reviews} {t("detailedCard.rev")}
                    </p>
                  </div>
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
                          ? (card.price * 51).toLocaleString()
                          : (card.askingPrice * 51).toLocaleString()}
                      </p>
                      <p className="text-xl font-medium">{t("currency.eg")}</p>
                    </>
                  )}
            </div>

            {card.checkIn && (
              <div className="flex flex-col font-medium text-sm gap-2">
                <div className="flex items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                  <CalendarArrowUp size={17} />
                  <p>{t("detailedCard.in")}</p>
                  <p className="text-alternateText">&bull;</p>
                  <p>{card.checkIn}</p>
                </div>
                <div className="flex items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                  <CalendarArrowDown size={17} />
                  <p>{t("detailedCard.out")}</p>
                  <p className="text-alternateText">&bull;</p>
                  <p>{card.checkOut}</p>
                </div>
              </div>
            )}

            {card.propertyType && (
              <>
                <div className="flex flex-col gap-2 items-center">
                  <div className="flex text-sm items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                    <Blocks size={17} />
                    <p>{t("detailedCard.year")}</p>
                    <p className="text-alternateText">&bull;</p>
                    <p>{card.yearBuilt}</p>
                  </div>
                  <div className="flex text-sm items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                    <Scale3d size={17} />
                    <p>{t("detailedCard.feet")}</p>
                    <p className="text-alternateText">&bull;</p>
                    <p>
                      {card.squareFeet}
                      {" ft"}
                    </p>
                  </div>
                </div>
              </>
            )}

            {card.listingDate && (
              <div className="flex flex-col gap-2 items-center">
                <div className="flex text-sm items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                  <Blocks size={17} />
                  <p>{t("detailedCard.lis")}</p>
                  <p className="text-alternateText">&bull;</p>
                  <p>{card.listingDate}</p>
                </div>
                <div className="flex text-sm items-center justify-between w-full gap-2 bg-background p-2 px-3 rounded-full">
                  <Scale3d size={17} />
                  <p>{t("detailedCard.feet")}</p>
                  <p className="text-alternateText">&bull;</p>
                  <p>
                    {card.squareFeet}
                    {" ft"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {card.reviews && (
          <div className="flex flex-col mt-2 gap-3 md:w-1/2 w-full h-fit">
            <p className="text-lg font-bold">{t("detailedCard.topRev")}</p>

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
              <p>{t("detailedCard.topRev2")}</p>
            )}
          </div>
        )}

        {card.sellerInfo && (
          <div className="flex flex-col mt-2 gap-3 h-fit">
            <p className="text-lg font-bold">{t("detailedCard.info")}</p>

            <div className=" gap-2 justify-center flex md:flex-row flex-col">
              <div className="flex justify-between w-fit bg-background p-2 rounded-full px-3 gap-2 items-center text-sm font-semibold flex-wrap">
                <CircleUserRound size={18} />

                <p className="text-alternateText">&bull;</p>
                <p>{card.sellerInfo.name}</p>
              </div>

              <div className="flex justify-between w-fit bg-background p-2 rounded-full px-3 gap-2 items-center text-sm font-semibold flex-wrap">
                <Phone size={18} />

                <p className="text-alternateText">&bull;</p>
                <p>{card.sellerInfo.contact}</p>
              </div>

              <div className="flex justify-between w-fit bg-background p-2 rounded-full px-3 gap-2 items-center text-sm font-semibold flex-wrap">
                <Mail size={18} />

                <p className="text-alternateText">&bull;</p>
                <p>{card.sellerInfo.email}</p>
              </div>
            </div>
          </div>
        )}
      </animated.div>
    </>
  );
}

export default DetailedCard;

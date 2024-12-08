import { Outlet, useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import ListingCards from "../../pages/ListingCards/ListingCards";
import { useTranslation } from "react-i18next";

function RentCards() {
  const { rentCardsData } = useOutletContext();
  const { t } = useTranslation();

  return (
    <>
      <ListingCards>
        {rentCardsData.length > 0 ? (
          rentCardsData.map((card) => (
            <Card key={card.id} {...card} per={t("rentCards.1")} />
          ))
        ) : (
          <div className="font-medium h-screen">{t("rentCards.2")}</div>
        )}
      </ListingCards>
      <Outlet context={{ rentCardsData }} />
    </>
  );
}

export default RentCards;

import { Outlet, useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import ListingCards from "../../pages/ListingCards/ListingCards";

function RentCards() {
  const { rentCardsData } = useOutletContext();


  return (
    <>
      <ListingCards>
        {rentCardsData.length > 0 ? (
          rentCardsData.map((card) => (
            <Card key={card.id} {...card} per=" / Per night"/>
          ))
        ) : (
          <div className="font-medium h-screen">
            No results found for your search.
          </div>
        )}
      </ListingCards>
      <Outlet context={{ rentCardsData}} />
    </>
  );
}

export default RentCards;

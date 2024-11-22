import { Outlet, useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import ListingCards from "../../pages/ListingCards/ListingCards";

function SellCards() {
  const { sellCardsData } = useOutletContext();

  return (
    <>
      <ListingCards>
        {sellCardsData.length > 0 ? (
          sellCardsData.map((sellcard) => (
            <Card
              key={sellcard.id}
              price={sellcard.askingPrice}
              {...sellcard}
              // per="/ Asking price"
            />
          ))
        ) : (
          <div className="font-medium h-screen">
            No results found for your search.
          </div>
        )}
      </ListingCards>
      <Outlet context={{ sellCardsData }} />
    </>
  );
}

export default SellCards;

import { Outlet, useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import ListingCards from "../../pages/ListingCards/ListingCards";

function BuyCards() {
  const { buyCardsData } = useOutletContext();
  return (
    <>
      <ListingCards>
        {buyCardsData.length > 0 ? (
          buyCardsData.map((buycard) => <Card key={buycard.id} {...buycard} />)
        ) : (
          <div className="font-medium h-screen">
            No results found for your search.
          </div>
        )}
      </ListingCards>
      <Outlet context={{ buyCardsData }} />
    </>
  );
}

export default BuyCards;

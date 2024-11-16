import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";
import ListingCards from "../../pages/ListingCards/ListingCards";

function BuyCards() {
  const { buyCardsData } = useOutletContext();
  return (
    <>
      <ListingCards>
        {buyCardsData.length > 0 ? (
          buyCardsData.map((buycard) => (
            <Card
              key={buycard.id}
              title={buycard.title}
              price={buycard.price}
              location={buycard.location}
              currency={buycard.currency}
              rate={buycard.rate}
              reviews={buycard.reviews}
              propertyType={buycard.propertyType}
              thumbnail={buycard.thumbnail}
            />
          ))
        ) : (
          <div className="font-medium h-screen">
            No results found for your search.
          </div>
        )}
      </ListingCards>
    </>
  );
}

export default BuyCards;

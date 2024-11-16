import { useOutletContext } from "react-router-dom";
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
              title={sellcard.title}
              price={sellcard.askingPrice}
              location={sellcard.location}
              currency={sellcard.currency}
              thumbnail={sellcard.thumbnail}
              reviews={sellcard.reviews}
              status={sellcard.status}
              per="/ Asking price"
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

export default SellCards;

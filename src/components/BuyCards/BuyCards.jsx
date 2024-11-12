import { buyCardsData } from "../../api/cards/buyCardsData";
import Card from "../Card/Card";

function BuyCards() {
  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {buyCardsData.map((buycard) => (
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
        ))}
       
      </div>
    </>
  );
}

export default BuyCards;

import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

function SellCards() {
  const { sellCardsData } = useOutletContext();

  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {sellCardsData.map((sellcard) => (
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
        ))}
      </div>
    </>
  );
}

export default SellCards;

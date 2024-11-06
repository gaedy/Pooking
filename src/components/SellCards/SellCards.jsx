import { useEffect, useState } from "react";
import { sellCardsData } from "../../api/cards/sellCards";
import Card from "../Card/Card";
import { LoaderIcon } from "lucide-react";

function SellCards() {
  const [sellCards, setSellCards] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(sellCardsData);
      }, 800);
    }).then((data) => {
      setSellCards(data);
      setIsLoading(false);
    });
  });

  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {loading ? (
          <div>
            <LoaderIcon className="animate-spin" />
          </div>
        ) : (
          <>
            {sellCards.map((sellcard) => (
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
          </>
        )}
      </div>
    </>
  );
}

export default SellCards;

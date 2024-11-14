import { useOutletContext } from "react-router-dom";
import Card from "../Card/Card";

function RentCards() {
  const { rentCardsData } = useOutletContext();

  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {rentCardsData.length > 0 ? (
          rentCardsData.map((card) => (
            <Card key={card.id} {...card} per=" / Per night" />
          ))
        ) : (
          <div className="font-medium h-screen">
            No results found for your search.
          </div>
        )}
      </div>
    </>
  );
}

export default RentCards;

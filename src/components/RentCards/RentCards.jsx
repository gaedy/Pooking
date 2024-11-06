import { cards } from "../../api/cards/cards";
import Card from "../Card/Card";



function RentCards() {
  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {cards.map((card) => (
          <Card key={card.id} {...card} per=" / Per night" />
        ))}
      </div>
    </>
  );
}

export default RentCards;

import { cards } from "../../api/Cards/cards";
import Card from "../Card/Card";
function ListCards() {
  return (
    <>
      <div className=" h-full flex justify-center items-center px-4 gap-4 flex-auto flex-wrap">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  );
}

export default ListCards;

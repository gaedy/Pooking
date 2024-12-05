import { useSelector } from "react-redux";
import { selectSavedCards } from "../../features/saved/savedSlice";
import Card from "../../components/Card/Card";
import { Outlet } from "react-router-dom";

function Saved() {
  const savedCards = useSelector(selectSavedCards);

  return (
    <>
      <div className="flex flex-col items-ce justify-center gap-2 p-10 h-full">
        <p className="px-4 text-xl font-bold">Saved Cards</p>

        <div className="flex md:flex-row h-full flex-col flex-wrap text-baseHoverText justify-center items-center gap-4 w-full rounded-xl p-4">
          {savedCards.length === 0 ? (
            <p className="text-center w-full ">No saved cards yet.</p>
          ) : (
            savedCards.map((saveCard) => (
              <Card key={saveCard.id} {...saveCard} />
            ))
          )}
        </div>
      </div>
      <Outlet context={{ savedCards }} />
    </>
  );
}

export default Saved;

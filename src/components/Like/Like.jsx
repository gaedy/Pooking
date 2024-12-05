import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSaveCard } from "../../features/saved/savedSlice";

function Like({ cardData }) {
  const dispatch = useDispatch();
  const savedCards = useSelector((state) => state.saved.savedCards);
  const isSaved = savedCards.some((card) => card.id === cardData.id);

  const handleSave = (e) => {
    e.stopPropagation(); // Prevent event bubbling to parent card
    dispatch(toggleSaveCard(cardData));
  };

  return (
    <>
      <div
        onClick={handleSave}
        className="text-sm flex items-center justify-end gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer"
      >
        <Heart
          size={18}
          stroke="none"
          className={`${
            isSaved ? "fill-red-600" : "fill-gray-800 dark:fill-gray-300"
          } active:scale-90`}
        />
      </div>
    </>
  );
}

export default Like;

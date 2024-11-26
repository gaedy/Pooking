import { Heart } from "lucide-react";

function Like({onClick, isSaved}) {
  return (
    <>
      <div onClick={onClick} className=" text-sm flex items-center justify-end gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
        <Heart
          size={18}
          stroke="none"
          className={`${isSaved ? "fill-red-600" : "fill-gray-800 dark:fill-gray-300"} active:scale-90`}
        />
      </div>
    </>
  );
}

export default Like;

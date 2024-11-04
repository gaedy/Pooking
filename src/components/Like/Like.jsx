import { Heart } from "lucide-react";
import like from "/src/assets/icons/like.svg";

function Like() {
  return (
    <>
      <div className=" text-sm flex items-center justify-end gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
        <Heart
          size={18}
          stroke="none"
          className="active:fill-red-600 active:scale-90 fill-gray-800"
        />
      </div>
    </>
  );
}

export default Like;

import star from "/src/assets/icons/star.svg";
function Rating({ rate, reviews }) {
  return (
    <>
      <div className=" text-sm flex items-center px-1 justify-end gap-1">
        <img
          className="w-4 mr-auto pointer-events-none select-none"
          src={star}
        ></img>
        <p>{rate}</p>
        <div className="text-xs py-1 flex items-center gap-2 font-medium">
          {/* <p>
                      {rate >= 9
                        ? "Wonderful"
                        : rate >= 8
                        ? "Very Good"
                        : rate >= 7
                        ? "Good"
                        : "Acceptable"}
                    </p> */}
          <p className="text-baseHoverText">({reviews})</p>
        </div>
      </div>
    </>
  );
}

export default Rating;

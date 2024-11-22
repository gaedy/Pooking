import star from "/src/assets/icons/star.svg";
function Rating({
  rate,
  reviews,
  iconSize = "4",
  textSize = "sm",
  showGrade = false,
}) {
  return (
    <>
      <div
        className={`text-${textSize} flex items-center  w-fit justify-end gap-1`}
      >
        <img
          className={`w-${iconSize} pointer-events-none select-none`}
          src={star}
        ></img>
        <p>{rate}</p>
        <div className="py-1 text-xs flex items-center gap-1 font-medium">
          {showGrade && (
            <p>
              {rate >= 9
                ? "Wonderful"
                : rate >= 8
                ? "Very Good"
                : rate >= 7
                ? "Good"
                : "Acceptable"}
            </p>
          )}

          {reviews && <p className="text-baseHoverText">({reviews})</p>}
        </div>
      </div>
    </>
  );
}

export default Rating;

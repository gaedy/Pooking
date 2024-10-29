import star from "/src/assets/icons/star.svg";
function Rating() {
  return (
    <>
      <div className=" h-6 w-24 text-sm  text-baseText font-semibold flex items-center px-1 justify-end gap-1">
        <img
          className="w-4 mr-auto pointer-events-none select-none"
          src={star}
        ></img>
        <p>4.5</p>
        <p>(854)</p>
      </div>
    </>
  );
}

export default Rating;

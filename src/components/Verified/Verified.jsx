import verified from "/src/assets/icons/verified.svg";


function Verified() {
  return (
    <>
      <div className=" text-xs flex items-center justify-end gap-1">
        <img
          className="w-5 mr-auto pointer-events-none select-none"
          src={verified}
        ></img>
        <p className="text-greenColor">Verified</p>
        {/* <p>(854)</p> */}
      </div>
    </>
  )
}

export default Verified
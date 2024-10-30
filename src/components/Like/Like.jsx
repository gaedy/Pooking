import like from "/src/assets/icons/like.svg";


function Like() {
  return (
    <>
    <div className=" text-sm flex items-center justify-end gap-1 hover:scale-110 transition-transform duration-200 cursor-pointer">
      <img
        className="w-5 mr-auto pointer-events-none select-none"
        src={like}
      ></img>
      
    </div>
  </>
  )
}

export default Like

function Card({ title = "Title here", description = "Add description here" }) {
  return (
    <>
      <div className="bg-teal-700 h-48 rounded-lg flex items-center gap-2 p-2">
        <div className="w-[35%] h-full bg-slate-500 rounded-md">img</div>
        <div className="w-[75%] h-full bg-slate-700 rounded-md">
          <div className="h-full flex flex-col justify-center">
            <div className="bg-yellow-600 h-[20%] flex items-center  ">
              rating
            </div>
            <div className="bg-yellow-300 h-[30%] flex flex-col justify-center items-start ">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm">{description}</p>
            </div>
            <div className="bg-yellow-700 h-[20%] flex items-center">tags</div>
            <div className="bg-yellow-600 h-[30%] flex items-center">h</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

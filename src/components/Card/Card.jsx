import Button from "../Button/Button";
import Like from "../Like/Like";
import Rating from "../Rating/Rating";
import Verified from "../Verified/Verified";
import img1 from "/src/assets/img/img1.jpg";
function Card({ title = "Title here", description = "Add description here" }) {
  return (
    <>
      <div className="lg:w-full w-fit hover:shadow-lg transition-shadow duration-300 h-full border border-hover2 rounded-lg flex flex-col items-center gap-4 p-2">
        <div className="h-44 w-full relative">
          <img
            className="object-cover rounded-md w-full h-full absolute -z-10"
            src={img1}
          ></img>
          {/* <div>fgfgj</div> */}
          <div className="  flex items-center justify-between text-sm  text-baseText font-semibold p-2  gap-2">
            {/* <div className="bg-white p-1 px-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
              <Verified></Verified>
            </div> */}
            <div className="bg-white p-1 px-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
              <Rating></Rating>
            </div>

            <div className="bg-white p-2 rounded-full backdrop-filter backdrop-blur-md bg-opacity-60">
              <Like></Like>
            </div>
          </div>
        </div>

        <div className="w-full h-fit rounded-md">
          <div className="h-full flex flex-col justify-center gap-2">
            <div className="flex justify-between">
              <div className="flex flex-col justify-center items-start ">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-sm text-alternateText">{description}</p>
              </div>

              <div className="text-lg font-bold">
                <p>$2000K</p>
              </div>
            </div>

            <div className=" flex items-center">tags</div>

            <div className="flex items-center justify-between gap-4 text-sm font-semibold ">
              <div className=" ">
                <Button type="outline" text="Open Map"></Button>
              </div>
              <div>
                <Button text="Virtual Tour"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

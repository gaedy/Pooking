import Sorting from "../../components/Sorting/Sorting";

function ListingCards({ children }) {
  return (
    <div className=" h-full flex flex-col w-full px-10 justify-center items-center">
      <div className="flex relative gap-4 pt-12  justify-center items-center w-full max-w-screen-xl flex-wrap">
        <div className="absolute top-0 left-0">
          <Sorting />
        </div>

        {children}
      </div>
    </div>
  );
}

export default ListingCards;

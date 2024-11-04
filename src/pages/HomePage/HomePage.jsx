import Card from "../../components/Card/Card";
import ListCards from "../../components/ListCards/ListCards";
import Searchbar from "../../components/Searchbar/Searchbar";

function HomePage() {
  return (
    <>
      <div className="w-full h-full mt-24 flex flex-col gap-8 ">
        <Searchbar />
        
        <ListCards />
      </div>
    </>
  );
}

export default HomePage;

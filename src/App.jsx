import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import HomePage from "./pages/HomePage/HomePage";
import ListCards from "./components/ListCards/ListCards";
import Rating from "./components/Rating/Rating";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import Dialog from "./components/Dialog/Dialog";

function App() {
  return (
    <>
      <Navbar />
      <Searchbar/>
      {/* <Card /> */}
      {/* <Button /> */}
      {/* <Rating /> */}
      <ListCards />
      {/* <HomePage/> */}
      {/* <Dialog></Dialog> */}
      
    </>
  );
}

export default App;

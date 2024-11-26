import { useSelector } from "react-redux";
import FrontPage from "./pages/FrontPage/FrontPage";

function App() {
  const font = useSelector((state) => state.font.font);
  return (
    <>
      <div className={`${font}`}>
        <FrontPage />
      </div>
    </>
  );
}

export default App;

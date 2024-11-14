import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dialog from "../../components/Dialog/Dialog";


function FrontPage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default FrontPage;

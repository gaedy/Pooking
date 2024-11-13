import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import RentCards from "../components/RentCards/RentCards";
import BuyCards from "../components/BuyCards/BuyCards";
import SellCards from "../components/SellCards/SellCards";
import CardsPage from "./CardsPage/CardsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardsPage />,
        children: [
          {
            path: "/",
            element: <RentCards />,
          },
          {
            path: "buy",
            element: <BuyCards />,
          },
          {
            path: "sell",
            element: <SellCards />,
          },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

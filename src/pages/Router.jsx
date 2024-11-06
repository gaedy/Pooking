import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import RentPage from "./RentPage/RentPage";
import RentCards from "../components/RentCards/RentCards";
import BuyPage from "./BuyPage/BuyPage";
import SellPage from "./SellPage/SellPage";
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
            element: <RentPage />,
            children: [
              {
                path: "/",
                element: <RentCards />,
              },
            ],
          },
          {
            path: "/",
            element: <BuyPage />,
            children: [
              {
                path: "buy",
                element: <BuyCards />,
              },
            ],
          },
          {
            path: "/",
            element: <SellPage />,
            children: [
              {
                path: "sell",
                element: <SellCards />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

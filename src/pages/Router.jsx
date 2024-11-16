import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import RentCards from "../components/RentCards/RentCards";
import BuyCards from "../components/BuyCards/BuyCards";
import SellCards from "../components/SellCards/SellCards";
import CardsPage from "./CardsPage/CardsPage";
import DetailedCard from "./DetailedCard/DetailedCard";

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
            children: [
              {
                path:"detailed-card/:id",
                element: <DetailedCard/>
              }
            ]
          },
          {
            path: "buy",
            element: <BuyCards />,
            children: [
              {
                path:"detailed-card/:id",
                element: <DetailedCard/>
              }
            ]
          },
          {
            path: "sell",
            element: <SellCards />,
            children: [
              {
                path:"detailed-card/:id",
                element: <DetailedCard/>
              }
            ]
          },
        ],
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

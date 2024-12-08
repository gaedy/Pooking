import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import RentCards from "../components/RentCards/RentCards";
import BuyCards from "../components/BuyCards/BuyCards";
import SellCards from "../components/SellCards/SellCards";
import CardsPage from "./CardsPage/CardsPage";
import DetailedCard from "./DetailedCard/DetailedCard";
import Dashboard from "./Dashboard/Dashboard";
import Saved from "./Saved/Saved";
import Settings from "./Settings/Settings";
import General from "./Settings/General";
import Appearance from "./Settings/Appearance";
import CardSystem from "./Settings/CardSystem";
import Signup from "./SignPage/Signup";
import Signin from "./SignPage/Signin";
import LoginPage from "./SignPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
        children: [
          {
            path: "",
            element: <Navigate to="signin" replace />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "saved",
        element: <Saved />,
        children: [
          {
            path: "detailed-card/:id/:title",
            element: <DetailedCard />,
          },
        ],
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            path: "",
            element: <Navigate to="general" replace />,
          },
          {
            path: "general",
            element: <General />,
          },
          {
            path: "appearance",
            element: <Appearance />,
          },
          {
            path: "card-system",
            element: <CardSystem />,
          },
        ],
      },
      {
        path: "/",
        element: <CardsPage />,
        children: [
          {
            path: "/",
            element: <RentCards />,
            children: [
              {
                path: "cards/:id/:title",
                element: <DetailedCard />,
              },
            ],
          },
          {
            path: "buy",
            element: <BuyCards />,
            children: [
              {
                path: "cards/:id/:title",
                element: <DetailedCard />,
              },
            ],
          },
          {
            path: "sell",
            element: <SellCards />,
            children: [
              {
                path: "cards/:id/:title",
                element: <DetailedCard />,
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

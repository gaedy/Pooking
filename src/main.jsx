import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./pages/Router.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import "./utils/i18n/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);

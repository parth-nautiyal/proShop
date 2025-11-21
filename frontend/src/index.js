//entry point of React
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />

      <Route path="cart" element={<CartScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="product/:id" element={<ProductScreen />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

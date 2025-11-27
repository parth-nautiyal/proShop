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

const router = createBrowserRouter(// creates the router object that you can use in your app
  createRoutesFromElements(// create JSX routes definition into a format the router understands
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
    <Provider store={store}>// this will provide the store to the entire app
      <RouterProvider router={router} />// this will provide the router to the entire app
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

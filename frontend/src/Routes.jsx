import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import Stock from "./pages/Stock";
import React from "react";
import { Spinner } from "./components/shared/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound> </NotFound>,
    children: [
      { path: "stock/:ticker", element: <Stock></Stock> },
      { path: "about", element: <h1>About</h1> },
      { path: "spinner", element: <Spinner /> },
    ],
  },
]);

function Routes() {
  return (
    <RouterProvider router={router} fallbackElement={Spinner}></RouterProvider>
  );
}

export default Routes;

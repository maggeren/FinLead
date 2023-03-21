import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import { MyNavbar } from "./components/Navbar";
import Stock from "./pages/Stock";
import React from "react";
import { Spinner } from "./components/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar></MyNavbar>,
    errorElement: <NotFound> </NotFound>,
    children: [
      { path: "stock/:ticker", element: <Stock></Stock> },
      { path: "about", element: <h1>About</h1> },
      { path: "spinner", element: <Spinner /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={Spinner}></RouterProvider>
  );
}

export default App;

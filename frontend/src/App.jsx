import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import { MyNavbar } from "./components/Navbar";
import {Login} from "./components/Login"
import Stock from "./pages/Stock";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar></MyNavbar>,
    errorElement: <NotFound> </NotFound>,
    children: [
      {path: "/main", element: <Login></Login>},
      { path: "stock/:ticker", element: <Stock></Stock> },
      { path: "about", element: <h1>About</h1> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

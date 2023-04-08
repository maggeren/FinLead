import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import { MyNavbar } from "./components/Navbar";
import {Login} from "./components/Login"
import { ModalPopup } from "./components/ModalPopup";
import Stock from "./pages/Stock";
import React, {useState} from "react";
import AuthContext from "./components/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar></MyNavbar>,
    errorElement: <NotFound> </NotFound>,
    children: [
      {path: "main", element: <h1>This is the landing page</h1>},
      { path: "stock/:ticker", element: <Stock></Stock> },
      { path: "about", element: <h1>About</h1> },
    ],
  },
]);

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <RouterProvider router={router}></RouterProvider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import Stock from "./pages/Stock";
import React, { useState } from "react";
import AuthContext from "./components/AuthContext";
import spinner from "./components/Spinner";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound> </NotFound>,
    children: [
      { path: "main", element: <h1>This is the landing page</h1> },
      { path: "stock/:ticker", element: <Stock></Stock> },
      { path: "about", element: <h1>About</h1> },
      { path: "spinner", element: <Spinner /> },
    ],
  },
]);

function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RouterProvider
        router={router}
        fallbackElement={spinner}
      ></RouterProvider>
    </AuthContext.Provider>
  );
}

export default Routes;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import { MyNavbar } from "./components/Navbar";
import Stock from "./pages/Stock";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "contacts/:contactId", element: <h1> HALLÅ</h1> }],
  },
  {
    path: "/stock/:ticker",
    element: <Stock></Stock>,
    errorElement: <NotFound />,
    children: [],
  },
]);

function App() {
  return (
    <div>
      <MyNavbar />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import { MyNavbar } from "./components/Navbar";
import React, { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "contacts/:contactId", element: <h1> HALLÅ</h1> }],
  },
  {
    path: "/helo",
    element: <h1>HALLO</h1>,
    errorElement: <h1>WRONG PAGE MODDAFUCKA</h1>,
    children: [
      { path: "contacts/:contactId", element: <h1> HALLÅ</h1> },
      { path: "hello", element: <h1>hello</h1> },
    ],
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

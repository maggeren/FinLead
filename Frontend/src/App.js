import { Root } from "./pages/Root";
import React from "react";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound.js";
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
    <RouterProvider router={router}>
      <Router />
    </RouterProvider>
  );
}

export default App;

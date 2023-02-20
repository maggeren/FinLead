import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {Root} from "./pages/Root";
import React, {useState} from "react";

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

  
 
  return(
     <RouterProvider router={router}></RouterProvider>
  )
}

export default App;

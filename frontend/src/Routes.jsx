import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { NotFound } from "./pages/NotFound";
import Stock from "./pages/Stock";
import React, { useState, useEffect } from "react";
import AuthContext from "./components/AuthContext";
import { Spinner } from "./components/shared/Spinner";
import { Register } from "./pages/Register";
import { io } from "socket.io-client"

//const socket = io(`http://localhost:${process.env.PORT}`);

let socket;
const serverURL = "http://localhost:4000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound> </NotFound>,
    children: [
      { path: "main", element: <h1>This is the landing page</h1> },
      { path: "stock/:ticker", element: <Stock socket={socket}></Stock> },
      { path: "about", element: <h1>About</h1> },
      { path: "spinner", element: <Spinner /> },
      { path: "register", element: <Register/>},
    ],
  },
]);

function Routes() {
  const[userState, setUserState] = useState(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    console.log("client-side code is executing!")
    const socketInstance = io(serverURL);
    setSocket(socketInstance);

    // Clean up the socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userState, setUserState }}>
      <RouterProvider
        router={router}
        fallbackElement={Spinner}
      ></RouterProvider>
    </AuthContext.Provider>
  );
}

export default Routes;

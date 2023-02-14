import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>WRONG PAGE MODDAFUCKA</h1>,
    children: [
      { path: "contacts/:contactId", element: <h1> HALLÅ</h1> },
      { path: "hello", element: <h1>hello</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

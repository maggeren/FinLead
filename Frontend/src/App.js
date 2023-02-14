import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {Root} from "./pages/Root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root/>,
//     errorElement: <h1>WRONG PAGE MODDAFUCKA</h1>,
//     children: [
//       { path: "contacts/:contactId", element: <h1> HALLÅ</h1> },
//       { path: "hello", element: <h1>hello</h1> },
//     ],
//   },
// ]);

function App() {
  console.log("hello");
  return(
    <Root/>
  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Root />} />
  //       <Route path="/lol" element={<h1>Fuck dig</h1>} />
  //     </Routes>
  //   </BrowserRouter>
  // )
  )
}

export default App;

import logo from './logo.svg';
import{BrowserRouter, Router, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
      <div className='pages'>
        <Routes>
          {/* <Route
          path='/'
            element={<Home />}
          /> */}
          
        </Routes>
      </div>
    </BrowserRouter>
    <form action='/login' method='post'>
      <h3>Login</h3>
      <label for="username">Brugernavn</label>
      <input type="email" name="username" />
      <label for="password">Adgangskode</label>
      <input type="password" name="passsord" />
      <input type="submit"/>
    </form>
    </div>
  );
}

export default App;

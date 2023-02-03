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
      <input type="email" name="username" /> <br/>
      <label for="password">Adgangskode</label>
      <input type="password" name="passsord" /> <br/>
      <input type="submit"/>
    </form>
    <form action = "/register" method='post'>
      <h3>Signup</h3>
      <label for="username">mail:</label>
      <input type="email" name="mail"/> <br/>
      <label for="password">password</label>
      <input type="password" name="password"/> <br/>
      <input type="submit"/>
      </form>
    </div>

  );
}

export default App;

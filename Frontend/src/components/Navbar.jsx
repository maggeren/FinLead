import { Link } from "react-router-dom";


const Navbar = () =>{
    return (
        <header>
            <div className="container">
            <Link to="/">
                <p>Workout Buddy</p>
            </Link>

            </div>
        </header>
    )
}

export default Navbar;
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <span className="logo">UniQuest</span>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link>About</Link>
                <Link>Contact us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
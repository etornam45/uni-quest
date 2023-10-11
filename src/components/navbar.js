import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navBar">
            <span className="logo">UniQuest</span>

            <div className="nav-links">
                <NavLink exact
                    to="/">
                    Home
                </NavLink>
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/contact" >
                    Contact
                </NavLink>
            </div >
        </nav>
    );
}

export default Navbar;
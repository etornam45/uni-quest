import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <span className="logo">UniQuest</span>

            <span className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}><FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: "2rem" }} /></span>

            <div className={`navLinks ${menuOpen ? "open" : ""}`}>
                <NavLink to="/uni-quest">
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
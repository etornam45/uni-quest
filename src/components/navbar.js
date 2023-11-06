import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 10) {
                document.querySelector('nav').classList.add('sticky');
            } else {
                document.querySelector('nav').classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>

            <span className="logo">
                <Link to="/">UniQuest</Link>
            </span>

            <div className='navRight'>
                <div className={`navLinks ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>

                </div >

                <div className="searchContainer">
                        <input type="text" name="text" className="input" required placeholder="Search careers" />
                        <div className="icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon' />
                        </div>
                    </div>
            </div>


            <span className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}><FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: "2rem" }} /></span>
        </nav>
    );
}

export default Navbar;

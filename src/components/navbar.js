import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

                <span className='searchBar'>
                    <div className="searchContainer">
                        <input checked="" className="checkbox" type="checkbox" />
                        <div className="mainbox">
                            <div className="iconContainer">
                                <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                            </div>
                            <input className="search_input" placeholder="search careers" type="text" />
                        </div>
                    </div>
                </span>
            </div>

            
            <span className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}><FontAwesomeIcon icon={faBars} style={{ color: "#ffffff", fontSize: "2rem" }} /></span>
        </nav>
    );
}

export default Navbar;

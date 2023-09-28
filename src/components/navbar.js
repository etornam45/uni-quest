import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navBar">
            <span className="logo">UniQuest</span>
            <div className="nav-links">
                <NavLink exact
                    to="/"
                    activeClassName={location.pathname === '/' ? 'active-link' : ''} className='navLink'>
                    Home
                </NavLink>
                <NavLink to="/about" className='navLink' activeClassName="active-link">
                    About
                </NavLink>
                <NavLink to="/contact" className='navLink' activeClassName="active-link">
                    Contact
                </NavLink>
            </div >
        </nav>
    );
}

export default Navbar;
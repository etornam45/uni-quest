import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="text uniquest">
                    <div>
                        <h6>UNIQUEST</h6>
                        <p>Get information about every tertiary program, school, available scholarships,  and career opportunities in one place.</p>
                    </div>
                    <div className="social">
                        <a href=""><FontAwesomeIcon icon={faSquareTwitter} className="socialIcon" /></a>

                        <a href=""><FontAwesomeIcon icon={faSquareInstagram} className="socialIcon" /></a>

                        <a href=""><FontAwesomeIcon icon={faSquareFacebook} className="socialIcon" /></a>
                    </div>
                </div>

                <div className="aboutContact">
                    <div className="text explore">
                        <h6>EXPLORE</h6>
                        <ul>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Careers</Link></li>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Results check</Link></li>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Support</Link></li>
                        </ul>
                    </div>

                    <div className="text about">
                        <h6>ABOUT</h6>
                        <ul>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Uniquest</Link></li>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Team</Link></li>
                            <li><FontAwesomeIcon icon={faGreaterThan} className="arrow" /><Link to='/'>Terms of services</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="cprt">
                <div></div>
                <p>Copyright © 2023 Uniquest. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
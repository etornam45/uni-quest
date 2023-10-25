import { Link } from "react-router-dom";

const Home = () => {

    return (
        
            <div className="home">
                <h3>Explore Your Ideal Universities. Discover the Perfect Program</h3>
                <div className="caption">
                    <p>With countless universities to choose from, the decision can be daunting. We
                        simplify the process by matching your profile to universities that align with your academic achievements and career goals. Discover institutions that will nurture your potential.
                    </p>
                </div>

                <div className="toform">
                    <p>Ready to explore your path to university?</p>
                    <Link to="/data-form">Let's get started</Link>
                </div>
            </div>
    );
}

export default Home;
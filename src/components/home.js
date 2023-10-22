import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="home">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="caption">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sed magni nulla, minus labore fugit rerum pariatur repudiandae at laudantium?</p>
            </div>
            
            <div className="toform">
                <Link to="/data-form">start</Link>
            </div>
        </div>

    );
}

export default Home;
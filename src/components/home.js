import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
            <div className="home">
                <Carousel fade className="carou">
                    <Carousel.Item interval={4000} className="carouItem">
                        <img src="/imgs/college.jpg" alt="" />
                        <Carousel.Caption className="carouCap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sed magni nulla, minus labore fugit rerum pariatur repudiandae at laudantium?</p>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

                            <Link to="/data-form">start</Link>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={4000} className="carouItem">
                        <img src="/imgs/building.jpg" alt="" />
                        <Carousel.Caption className="carouCap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sed magni nulla, minus labore fugit rerum pariatur repudiandae at laudantium?</p>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                            <Link to="/data-form">start</Link>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={4000} className="carouItem">
                        <img src="/imgs/african-s.jpg" alt="" />
                        <Carousel.Caption className="carouCap">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sed magni nulla, minus labore fugit rerum pariatur repudiandae at laudantium?</p>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>

                            <Link to="/data-form">start</Link>

                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>

            </div>
        </>
    );
}

export default Home;
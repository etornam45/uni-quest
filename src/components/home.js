import { Link } from "react-router-dom";

const Home = () => {

    return (

        <>
            <div className="home">

                <div className="landing">

                    <div className="hero">

                        <div className="heroheading">
                            <h5>Welcome to Your Personalized University Journey.</h5>
                            <h1>Explore Your Ideal Universities. Discover the Perfect Program</h1>
                        </div>


                        <div className="heroContent">

                            <div className="herotext">
                                <p>With countless universities to choose from, the decision can be daunting. We
                                    simplify the process by matching your profile to universities that align with your academic achievements and career goals. Discover institutions that will nurture your potential.
                                </p>
                            </div>

                            <div className="toform">
                                <p>Ready to explore your path to university?</p>
                                <button><Link to="/data-form">Let's get started</Link></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* career stages */}
            <section className="exploreStages">
                <h1>For every career stage</h1>
                <div className="stages">

                    <figure class="stage">
                        <figcaption>
                            <h4>High School Students</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div class="arrow"></div>
                        </figcaption>
                        <img src="/images/high-school.jpg" alt="sq-sample10" />
                    </figure>

                    <figure class="stage">
                        <figcaption>
                            <h4>College Students & Graduates</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div class="arrow"></div>
                        </figcaption>
                        <img src="/images/undergraduate.jpg" />
                    </figure>

                    <figure class="stage">
                        <figcaption>
                            <h4>Working Professionals</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div class="arrow"></div>
                        </figcaption>
                        <img src="/images/working-professional.jpg" alt="sq-sample10" />
                    </figure>

                    <figure class="stage">
                        <figcaption>
                            <h4>Career Changers</h4>
                            <p>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                            <div class="arrow"></div>
                        </figcaption>
                        <img src="/images/career-changer.jpg" alt="sq-sample10" />
                    </figure>

                </div>
            </section>

            {/* show case */}
            <section className="showCase">
                <div className="showContent">
                    <div className="caseBox">
                        <h2>- Personalized Recommendations.</h2>
                        <p>At Uniquest, we understand that every student is unique. We use your grades, interests, and aspirations to provide personalized recommendations. Whether you excel in math, have a passion for the arts, or dream of studying science, we've got you covered.</p>
                    </div>
                    <div className="caseBox">
                        <h2>- Discover the Perfect Program.</h2>
                        <p>Choosing the right program is crucial. Our intelligent recommendation system matches your grades and interests to a wide range of programs and courses. Explore a world of possibilities, from STEM to the arts, business to health sciences. Find your perfect fit.</p>
                    </div>
                    <div className="caseBox">
                        <h2>- Explore Your Ideal Universities</h2>
                        <p>With countless universities to choose from, the decision can be daunting. We
                            simplify the process by matching your profile to universities that align with your academic achievements and career goals. Discover institutions that will nurture your potential.
                        </p>
                    </div>
                    <div className="caseBox">
                        <h2>- Guidance at Every Step.</h2>
                        <p>We're here to assist you at every step of your journey. From understanding prerequisites to preparing for standardized tests, our comprehensive resources will ensure you're well-prepared for the road ahead.</p>
                    </div>
                </div>
            </section>

            {/* <!-----call to action----> */}

            <section class="calltoAction">
                <div className="cta">
                    <h1>
                        Lorem ipsum dolor sit amet consectetur
                        <br />
                        Lorem ipsum dolor sit.
                    </h1>

                    <div>
                        <button><Link to="/data-form">Let's get started</Link></button>
                        <button><Link to="/data-form">Go to careers</Link></button>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
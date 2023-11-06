import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Programs = () => {
    return (
        <div className="programsContainer">
            <div className="title">
                <h2>Recommended programs</h2>
            </div>

            <div className="programsFilter">
                <h1>filter box</h1>
            </div>

            <div className="programs">
                <div className="prog">
                    <h5 className="progName">English</h5>
                    <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                    <button>
                        <Link to="/program">Go to program</Link>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="prog">
                    <h5 className="progName">English</h5>
                    <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                    <button>
                        <Link to="/program">Go to program</Link>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="prog">
                    <h5 className="progName">English</h5>
                    <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                    <button>
                        <Link to="/program">Go to program</Link>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="prog">
                    <h5 className="progName">English</h5>
                    <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                    <button>
                        <Link to="/program">Go to program</Link>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>

            <div className="relatedProgramsCont">
                <h3>Related programs</h3>

                <div className="relatedPrograms">

                    <div className="relatedProg">
                        <h5 className="relatedProgName">English</h5>
                        <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                        <button>
                            <Link to="/program">Go to program</Link>
                            <FontAwesomeIcon className="i" icon={faArrowRight} />
                        </button>
                    </div>

                    <div className="relatedProg">
                        <h5 className="relatedProgName">English</h5>
                        <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                        <button>
                            <Link to="/program">Go to program</Link>
                            <FontAwesomeIcon className="i" icon={faArrowRight} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Programs;
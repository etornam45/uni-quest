import { Link } from "react-router-dom";


const Programs = () => {
    return (
        <div className="programsContainer container">
            <div className="title"><h2>Here are your programs.</h2></div>

            <div className="programs">
                <div className="prog">
                    <h5 className="progName">English</h5>
                    <p>Program overview Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio, aliquid officia, id obcaecati cumque iusto earum quam laudantium nostrum dolore modi cupiditate necessitatibus eos sunt accusantium excepturi fuga maxime!</p>
                    <Link to="/program">Go to program</Link>
                </div>
            </div>
        </div>
    );
}

export default Programs;
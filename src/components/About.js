import { Link } from "react-router-dom"

function About() {
    return (
        <div>
            <h4>About me!</h4>
            <p>This is a simple Todo app tracker!</p>
            <Link to="/">Go back.</Link>
        </div>
    )
}

export default About

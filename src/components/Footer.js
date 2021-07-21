import './style/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <div className="section-link">
                <Link to="/archived">Archived</Link>
                <Link to="/about">About</Link>
            </div>
        </footer>
    )
}

export default Footer

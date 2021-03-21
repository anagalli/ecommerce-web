import '../../assets/css/Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav className="main-nav">
            <ul className="ul-nav">
                <li><Link to={`/`} className="link-nav">Productos</Link></li>
                <li><Link to={`/`} className="link-nav">Gamer</Link></li>
                <li><Link to={`/`} className="link-nav">Professional</Link></li>
                <li><Link to={`/`} className="link-nav">Premium</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
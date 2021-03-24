import '../../assets/css/Nav.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return(
        <nav className="main-nav">
            <ul className="ul-nav">
                <li><NavLink to={`/`} className="link-nav">Productos</NavLink></li>
                <li><NavLink to={`/gamer`} className="link-nav">Gamer</NavLink></li>
                <li><NavLink to={`/professional`} className="link-nav">Professional</NavLink></li>
                <li><NavLink to={`/premium`} className="link-nav">Premium</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
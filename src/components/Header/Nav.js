import '../../assets/css/Nav.css';

function Nav() {
    return(
        <nav className="main-nav">
            <ul className="ul-nav">
                <li><a href="#productos" className="link-nav">Productos</a></li>
                <li><a href="#gamer" className="link-nav">Gamer</a></li>
                <li><a href="#professional" className="link-nav">Professional</a></li>
                <li><a href="#premium" className="link-nav">Premium</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
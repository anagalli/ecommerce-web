import '../assets/css/Nav.css';

function Nav() {
    return(
        <nav className="main-nav">
            <ul className="ul-nav">
                <li><a href="#home" className="link-nav">Home</a></li>
                <li>
                    <a href="#categorias" className="link-nav" id="link-categories">Categorías</a>
                    <ul className="ul-categories" id="ul-categories">
                        <li><a href="#gamer" className="link-nav">Gamer</a></li>
                        <li><a href="#professional" className="link-nav">Professional</a></li>
                        <li><a href="#premium" className="link-nav">Premium</a></li>
                    </ul>
                </li>
                <li><a href="#contacto" className="link-nav">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
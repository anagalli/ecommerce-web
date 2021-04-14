import '../../assets/css/Header.css';
import Logotipo from './Logotipo';
import Nav from './Nav';
import CartWidget from './CartWidget';

function Header() {
    return(
        <header className="header">
            <div className="container header-container">
                <Logotipo />
                <div className="navlinks-container">
                    <Nav />
                    <CartWidget />
                </div>
            </div>
        </header>
    );
}

export default Header;
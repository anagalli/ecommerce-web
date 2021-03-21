import '../../assets/css/Header.css';
import Logotipo from './Logotipo';
import Nav from './Nav';
import ButtonsNav from './ButtonsNav';

function Header() {
    return(
        <header className="header">
            <div className="container header-container">
                <Logotipo />
                <Nav />
                <ButtonsNav />
            </div>
        </header>
    );
}

export default Header;
import '../../assets/css/ButtonsNav.css';
import CartWidget from './CartWidget';

function ButtonsNav() {
    return(
        <div className="buttons-cart-container">
            <div className="buttons-user-container">
                <ul className="ul-button-user">
                    <li><a href="#register" className="link-nav link-register">Registrarse</a></li>
                    <li><a href="#login" className="link-nav link-login">Iniciar Sesión</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    );
}

export default ButtonsNav;
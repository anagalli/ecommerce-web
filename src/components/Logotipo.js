import '../assets/css/Logotipo.css';
import logo from '../assets/images/logotipo.png';

function Logotipo() {
    return (
        <div className="logotipo-container">
            <a href="#home" className="link-logotipo">
                <img className="img-logotipo" src={logo} alt="Logotipo" />
            </a>
        </div>
    );
}

export default Logotipo;
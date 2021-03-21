import '../../assets/css/Logotipo.css';
import logo from '../../assets/images/logotipo.png';
import {Link} from 'react-router-dom';

function Logotipo() {
    return (
        <div className="logotipo-container">
            <Link to={`/`} className="link-logotipo">
                <img className="img-logotipo" src={logo} alt="Logotipo" />
            </Link>
        </div>
    );
}

export default Logotipo;
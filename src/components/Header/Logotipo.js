import '../../assets/css/Logotipo.css';
import {Link} from 'react-router-dom';

function Logotipo() {
    return (
        <div className="logotipo-container">
            <Link to={`/`} className="link-logotipo">dePrimera</Link>
        </div>
    );
}

export default Logotipo;
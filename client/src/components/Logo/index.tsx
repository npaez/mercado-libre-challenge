// module
import { Link } from "react-router-dom";

// assets
import meli from './mercadolibre-logo.png';

// main component definition
const Logo = () => {
  return (
    <Link to="/">
      <img
        alt="Mercado Libre Logo"
        src={ meli }
        width={ 53 }
        height={ 36 }
      />
    </Link>
  );
};

export default Logo;
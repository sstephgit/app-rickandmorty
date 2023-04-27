import { useNavigate } from "react-router-dom";
import logo from "../../image/image1.png";
import "./logo.css";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="contenedor-logo" onClick={handleClick}>
      <img className="logo" src={logo} alt="Rick and Morty" />
    </div>
  );
};

export default Logo;

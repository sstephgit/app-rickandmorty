import { useNavigate } from "react-router-dom";
import image from "../../image/default-image.png";
import "./card.css";

const Card = ({ name, img, id }) => {
  const navigate = useNavigate();

  const clickCard = () => {
    navigate(`/personaje/${id}`);


  };
  return (
    <div className="contenedor-card" onClick={clickCard} id={id}>
      <img className="card-image" src={img} alt={name} />
      <div className="nombre-personaje">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;

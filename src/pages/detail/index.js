import "./detail.css";
// import image from "../../image/default-image.png";
import Logo from "../../components/logo";
import { useMatches, useParams } from "react-router-dom";
import { getChartactersById } from "../../api";
import { useEffect, useState } from "react";

const Detail = () => {
  const parametros = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getChartactersById(parametros.id).then((resultado) => {
      setData(resultado);
      console.log(resultado);
    });
  }, []);

  return (
    <>
      <div className="contenedor-detail">
        <Logo />
        <div className="nombre">{data.name}</div>
        <div className="content-body-detail">
        <div className="contenedor-image">
        <img className="image" src={data.image} alt="personaje" />
        </div>
        <div className="contenedor-informacion">
          <div>{`Nombre: ${data.name}`}</div>
          <div>{`Genero: ${data.gender}`}</div>
          <div>{`Especie: ${data.species}`}</div>
          <div>{`Status: ${data.status}`}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

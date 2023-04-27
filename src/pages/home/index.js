import "./home.css";
import Logo from "../../components/logo";
import { Button } from "@mui/material";
import Search from "../../components/search";
import { useFetchCharacters } from "../../hooks/useFetchCharacters";
import Card from "../../components/card";

const Home = () => {
  const { characters, isLoading } = useFetchCharacters();
  const clickVerMas = () => {
    console.log("se hizo click");
  };
  return (
    <>
      <div className="contenedor-home">
        <Logo />
        <div className="content-body">
          <div className="body">
            <div className="contenedor-search">
              <Search />
            </div>
            <div className="contenedor-personajes">
              {isLoading ? (
                <p>Cargando...</p>
              ) : (
                characters.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      name={item.name}
                      img={item.img}
                      id={item.id}
                    />
                  );
                })
              )}
            </div>

            <div className="contenedor-btn">
              <Button
                className="btn-more"
                variant="contained"
                onClick={clickVerMas}
              >
                VER MAS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

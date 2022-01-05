import { FC, useEffect, useState } from "react";
import { CardList } from "../../components/Cardlist";

const NormalPage: FC = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((name) => setPokemons(name.results));
  }, []);

  return <CardList pokemons={pokemons}></CardList>;
};

export default NormalPage;

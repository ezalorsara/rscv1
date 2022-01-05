import React from "react";

export const Card = (props: { pokemon: { name: string | any[] } }) => (
  <div
    className="card-continer"
    style={{
      width: 250,
      border: "1px solid #333",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      padding: 20,
    }}
  >
    <a
      href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
        style={{ width: "100%", height: "auto" }}
      />
      <h2>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
    </a>
  </div>
);

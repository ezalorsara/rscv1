import React from "react";

import { Card } from "./Card";

export const CardList = (props: { pokemons: any[] }) => (
  <div
    className="card-list"
    style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}
  >
    {props.pokemons.map((pokemon) => (
      <Card key={pokemon.name} pokemon={pokemon}></Card>
    ))}
  </div>
);

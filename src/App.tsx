import { useState } from "react";

import pokemonData from './data/pokemon.json';
import type { Pokemon } from './types/Pokemon';

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

import ProductCard from './components/ProductCard';

function App(){
  const [selected, setSelected] = useState<Pokemon | null>(null);

  const pokemon: Pokemon[] = pokemonData;

  return (
    <div>
      {!selected && (
        <PokemonList data={pokemon} onSelect={setSelected} />
      )}
      {selected && (
        <PokemonDetail pokemon={selected} />
      )}

      <ProductCard pokemonName="Bulbasaur" pokemonNumber="001" pokemonType="grass" pokemonType2="poison"/>

  </div>
  );  
}

export default App;
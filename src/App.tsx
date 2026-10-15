import { useState } from "react";

import pokemonData from './data/pokemon.json';
import type { Pokemon } from './types/Pokemon';

import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

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
    </div>
  );  
}

export default App;
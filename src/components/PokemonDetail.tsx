import type { Pokemon } from "../types/Pokemon";

interface Props {
    pokemon: Pokemon;
}

const PokemonDetail = ({ pokemon }: Props) => {
    return (
        <div className="pokemon-detail">
            <img src={pokemon.name} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>

            <p><strong>Types:</strong> {pokemon.type.join(", ")}</p>
            <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
            <p><strong>Height:</strong> {pokemon.height} m</p>
            <p><strong>Weight:</strong> {pokemon.weight} kg</p>

            <p>{pokemon.summary}</p>
            <p><strong>Evolutions:</strong> {pokemon.evolutions.join (" → ")}</p>
        </div>
    );
};

export default PokemonDetail;
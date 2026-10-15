import type { Pokemon } from "../types/Pokemon";

interface Props {
    pokemon: Pokemon;
}

const PokemonDetail = ({ pokemon }: Props) => {
    return (
        <div className="pokemon-detail">
             <img className="pokemon-card_img" 
                        src={
                            pokemon.name === "Nidoran♀"
                            ? "../src/assets/pokemon/nidoran-female.png" 
                            : pokemon.name === "Nidoran♂"
                            ? "../src/assets/pokemon/nidoran-male.png"
                            : pokemon.name === "Mr Mime"
                            ? "../src/assets/pokemon/Mr_Mime.png"
                            : `../src/assets/pokemon/${pokemon.name}.png`} 
                        alt={pokemon.name} 
                        width="200px" 
                        height="200px"
                    />
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
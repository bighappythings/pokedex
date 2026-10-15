import type { Pokemon } from "../types/Pokemon";

interface Props {
    pokemon: Pokemon;
}

const typeColors: Record<string, string> = {
    /*pokemon type colours*/
    bug: "#91a119",
    dark: "#343a40",
    dragon: "#5060e1",
    electric:"#ffc107",
    fairy: "#ef70ef",
    fighting: "#ff8000",
    fire: "#dc3545",
    flying: "#81b9ef",
    ghost: "#563d7c",
    grass: "#28a745",
    ground: "#915121",
    ice: "#17a2b8",
    normal: "#dce0e3",
    poison: "#9141c1",
    psychic: "#ef4179",
    rock: "#afa981",
    steel: "#6c757d",
    water: "#007bff"
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

             <div className="pokemon-card_body_type mt-20 justify-content-between">
                {pokemon.type.map(type => (
                    <span
                        key={type}
                        className="type-badge"
                        style={{ 
                            backgroundColor: typeColors[type],
                            color: type === "normal" ? "#000000" : "#ffffff" }}
                    >
                    {type}
                    </span>
                ))}    
            </div>

            <p><strong>Abilities:</strong> {pokemon.abilities.join(", ")}</p>
            <p><strong>Height:</strong> {pokemon.height} m</p>
            <p><strong>Weight:</strong> {pokemon.weight} kg</p>

            <p>{pokemon.summary}</p>

            <h3>Evolutions</h3>

            {pokemon.evolutions?.length > 0 && (
                <div className="evolutions-card">
                    {pokemon.evolutions.map((evolution, index) => (
                        <div key={evolution}>
                            <div className="evolution-group">
                                <img 
                                    className="evolutions-img"
                                    src={`../src/assets/pokemon/${evolution}.png`}
                                    width="100px"
                                    height="100px"
                                /> 
                                <p><a href="#">{evolution}</a></p> 
                            </div>

                            {index < pokemon.evolutions.length - 1 && (
                                <span className="evolutions-arrow">→</span>
                            )}
                        </div>
                    ))}                    
                </div>

               
            )} 

        </div>
    );
};

export default PokemonDetail;
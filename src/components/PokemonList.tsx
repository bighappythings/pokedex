import type { Pokemon } from '../types/Pokemon';

interface Props {
    data: Pokemon[];
    onSelect: (pokemon: Pokemon) => void;
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

const PokemonList = ({ data, onSelect }: Props) => {
    return (
        <div>
            <div className="intro">
                <h1>Pokedex</h1>
                <p>Basic Pokedex of the Kanto region original 151.</p>
            </div>

            <div className="pokemon-list">
            {data.map(p => (
                <div key={p.name} className="pokemon-card" onClick={() => onSelect(p)}>
                    <img className="pokemon-card_img" 
                        src={
                            p.name === "Nidoran♀"
                            ? "../src/assets/pokemon/nidoran-female.png" 
                            : p.name === "Nidoran♂"
                            ? "../src/assets/pokemon/nidoran-male.png"
                            : p.name === "Mr Mime"
                            ? "../src/assets/pokemon/Mr_Mime.png"
                            : `../src/assets/pokemon/${p.name}.png`} 
                        alt={p.name} 
                        width="200px" 
                        height="200px"
                    />
                    <div className="pokemon-card_body">
                        <div>
                            <div className="pokemon-card_body_number">
                                <h2 className="text-muted">{p.number}</h2>
                            </div>
                            <h2 className="pokemon-card_body_title">{p.name}</h2>
                            

                            <div className="pokemon-card_body_type mt-20 justify-content-between">
                                {p.type.map(type => (
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

                            <div className="pokemon-card_footer">
                                <p><strong>Attributes:</strong> {p.abilities.join(", ")}</p>
                                <p><strong>Height:</strong> {p.height}</p>
                                <p><strong>Weight:</strong> {p.weight}</p>
                                <p>{p.summary}</p>
                                <a className="btn btn-success" href="#">View more</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
        
    );
};

export default PokemonList;
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
    normal: "#f8f9fa",
    poison: "#9141c1",
    psychic: "#ef4179",
    rock: "#afa981",
    steel: "#6c757d",
    water: "#007bff"
}

const PokemonList = ({ data, onSelect }: Props) => {
    return (
        <div className="pokemon-list">
            {data.map(p => (
                <div key={p.name} className="pokemon-card" onClick={() => onSelect(p)}>
                    <img className="pokemon-card_img" src={`../src/assets/pokemon/${p.name}.png`} alt={p.name} width="200px" height="200px"/>
                    <div className="pokemon-card_body">
                        <div className="">
                            <h3 className="">{p.name}</h3>
                            <div>
                                <small className="text-muted">{p.number}</small>
                            </div>

                            <div className="mt-20 justify-content-between">
                                {p.type.map(type => (
                                    <span
                                        key={type}
                                        className="type-badge"
                                        style={{ backgroundColor: typeColors[type] }}
                                    >
                                    {type}
                                    </span>
                                ))}    
                            </div>
                            
                            <p>{p.type.join(", ")}</p>

                            <div className="pokemon-card_footer">
                                <ul>
                                    <li>{p.abilities}</li>
                                    <li>{p.height}</li>
                                    <li>{p.weight}</li>
                                </ul>
                                <p>{p.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;
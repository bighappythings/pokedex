import type { Pokemon } from '../types/Pokemon';

interface Props {
    data: Pokemon[];
    onSelect: (pokemon: Pokemon) => void;
}

const PokemonList = ({ data, onSelect }: Props) => {
    return (
        <div className="pokemon-list">
            {data.map(p => (
                <div key={p.name} className="pokemon-card card card-product" onClick={() => onSelect(p)}>
                    <img src={p.name} alt={p.name} />
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="card-title mb-0">{p.name}</h3>
                            <div>
                                <small className="text-muted">pokemonNumber</small>
                            </div>

                            <div className="mt-20 justify-content-between">
                                <a className="btn btn-success">pokemonType</a> 
                                <a className="btn poison">pokemonType2</a>
                            </div>
                            
                            <p>{p.type.join(", ")}</p>

                            <div className="card-footer d-flex justify-content-between bg-light">
                                <ul>
                                    <li>pokemon abilities</li>
                                    <li>pokemon height</li>
                                    <li>pokemon weight</li>
                                    <li>pokemon summary</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;
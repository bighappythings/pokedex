//import { PropsWithChildren } from "react";

interface Props {
    pokemonName?: string;
    pokemonNumber?: string;
    pokemonType?: 'grass' | 'fire' | 'water';
    pokemonType2?: 'grass' | 'fire' | 'water' | 'poison';
    pokemonAbilities?: string;
    pokemonHeight?: string;
    pokemonWeight?: string;
    pokemonSummary?: string;
}

const ProductCard = ({ pokemonName, pokemonNumber, pokemonType, pokemonType2 } : Props) => {  
    return (
        <div className="card card-product">
            <img src="./src/assets/pokemon/bulbasaur.png" className="card-img-top" alt="Product Image" style={{ height: '200px', width: '200px' }} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">{pokemonName}</h5>
                    <div>
                        <small className="text-muted">#{pokemonNumber}</small>
                    </div>   
                </div>

                <div className="mt-20 justify-content-between">
                    <a className="btn btn-success">{pokemonType}</a> 
                    <a className="btn poison">{pokemonType2}</a>
                </div>

            </div>
            <div className="card-footer d-flex justify-content-between bg-light">
                <ul>
                    <li>pokemon abilities</li>
                    <li>pokemon height</li>
                    <li>pokemon weight</li>
                    <li>pokemon summary</li>
                </ul>
            </div>

            
        </div>

    )
}

export default ProductCard;
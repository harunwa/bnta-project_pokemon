import Pokemon from "./Pokemon";
import './Pokemon.css';

const PokemonList = ({pokemons}) => {

    const pokemonElements = pokemons.map((pokemon, index) => {
        return <Pokemon key={index} pokemon={pokemon} />
    })


    return ( 
    <>
     {pokemonElements}
    </> 
    );
}
 
export default PokemonList;
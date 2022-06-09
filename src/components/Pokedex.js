import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    const [ pokemonSearch, setPokemonSearch] = useState("");
    const [ characters, setCharacters ] = useState([]);
    const [ pokemonType, setPokemonType ] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
            .then(res => setCharacters(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type")
            .then(res => setPokemonType(res.data.results))

    }, [])


    const search = () => {
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterPokemonType = e => {
        axios.get(e.target.value)
            .then(res => setCharacters(res.data.pokemon))
    }

    const [page, setPage] = useState(1)
    
    const numPokemons = 20;
    const lastIndex = numPokemons * page;
    const firstIndex = lastIndex - numPokemons;
    
    const pokemonPaginated = characters.slice(firstIndex, lastIndex);

    const lastPage = Math.ceil(characters.length / numPokemons);

    return (
        <div className='pokedex-body'>
            <img className='img-pokedex' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1655683200&Signature=KQ~0B3BiephZvobLH6S66rdPWbh4JBc0JGuqp5UXQ9HNAQMI5lGgNt2uvKV3F~67wgZrn3OsnsU4n6tAIoE5YiEIJv4R6jGxIvTQwKrpynUYDUfDouMfUA6iis6lj1TWxpXtn77bHzd2r82MNN3S-eg1ixRvfqN72fHxaiNf9lqhkLTe4g9ToddFHpWH-iMekzO8apbER7c2Watq3S~o1067YNwLbNnDsMPvXoWKQn4At8b2tqeF70AjZ3QGd0gSekFDjeEpJJh3EiEXF7nVK5zQBJ3KYhwPE21AWAJ39RipaP1f~~eCnFn1VCLe8UlQdWhijlsB7I6vtD3cPkMFiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='topred-pokedex'></div>
            <div className='topblack-pokedex'></div>
            <img className='gift-pokedex' src="https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0087.gif" alt="" />
            <b><p className='welcome-msg'><span className='span'>Welcome {user}</span>, here you can find your favorite pokemon</p></b>
            <div className='class-and-search'>
                <form className="search-box">
                    <input
                        className='input-pokemon' 
                        type="text" 
                        value={pokemonSearch} 
                        onChange={e => setPokemonSearch(e.target.value)}
                        placeholder="search your favorite pokemon" 
                    />
                    <div className='btt-div'>
                        <button className='btt-pokemon' onClick={search} >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
                <select className='types' onChange={filterPokemonType}>
                    {
                        pokemonType.map( pokemon => (
                            <option key={pokemon.url} value={pokemon.url}>{pokemon.name} </option>
                        ))
                    }
                </select>
            </div>
            <div>
                <button className='btt-pagination'  
                        onClick={()=> setPage(page-1)} 
                        disabled={page === 1}
                    >
                        <i className="fa-solid fa-circle-chevron-left btt-pag"></i>
                </button>
                <button className='btt-pagination' 
                        onClick={()=> setPage(page+1)} 
                        disabled={page === lastPage}
                    >
                        <i className="fa-solid fa-circle-chevron-right btt-pag"></i>
                    </button>
            </div>
            <div className='pokemoncard-body'>
                {
                    pokemonPaginated.map(pokemon=>(
                        <PokemonCard 
                            key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} 
                            pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}
                        />
                    ))
                }
            </div>
            <div>
                <button className='btt-pagination'  
                        onClick={()=> setPage(page-1)} 
                        disabled={page === 1}
                    >
                        <i className="fa-solid fa-circle-chevron-left btt-pag"></i>
                </button>
                <button className='btt-pagination' 
                        onClick={()=> setPage(page+1)} 
                        disabled={page === lastPage}
                    >
                        <i className="fa-solid fa-circle-chevron-right btt-pag"></i>
                    </button>
            </div>
        </div>
    );
};

export default Pokedex;
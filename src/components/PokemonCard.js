import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {

    const [ pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonUrl])

    
    const types = () => {
        let arrTypes = []
        for (let i = 0; i <= pokemon.types?.length - 1; i++){
            arrTypes.push(pokemon.types[i]?.type.name)
        }
        const resultTypes = arrTypes.join(' / ')
        return resultTypes
    }


    return (
        <div className='card' onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <img src={pokemon.sprites?.front_default} alt="" />
            <h2>{pokemon.name}</h2>
            <p><b>Types: </b>{types()}</p>
            <h3>Stats</h3>
            <p><small><i>{pokemon.stats?.[0].stat.name} {pokemon.stats?.[0].base_stat} / {pokemon.stats?.[1].stat.name} {pokemon.stats?.[1].base_stat}</i></small></p>
            <p><small><i>{pokemon.stats?.[2].stat.name} {pokemon.stats?.[2].base_stat} / {pokemon.stats?.[5].stat.name} {pokemon.stats?.[5].base_stat}</i></small></p>
            <div className="font-red"></div>|
        </div>
    ); 
};

export default PokemonCard;
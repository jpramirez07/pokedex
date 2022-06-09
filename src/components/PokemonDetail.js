import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`) 
            .then(res => setPokemon(res.data) )
    }, [id])

    const types = () => {
        let arrTypes = []
        for (let i = 0; i <= pokemon.types?.length - 1; i++){
            arrTypes.push(pokemon.types[i]?.type.name)
        }
        const resultTypes = arrTypes.join(' / ')
        return resultTypes
    }

    const abilities = () => {
        let arrAbilities = []
        for (let i = 0; i <= pokemon.abilities?.length - 1; i++){
            arrAbilities.push(pokemon.abilities[i]?.ability.name)
        }
        const resultAbilities = arrAbilities.join(' / ')
        return resultAbilities
    }

    return (
        <div>
            <img className='img-pokedex' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1655683200&Signature=KQ~0B3BiephZvobLH6S66rdPWbh4JBc0JGuqp5UXQ9HNAQMI5lGgNt2uvKV3F~67wgZrn3OsnsU4n6tAIoE5YiEIJv4R6jGxIvTQwKrpynUYDUfDouMfUA6iis6lj1TWxpXtn77bHzd2r82MNN3S-eg1ixRvfqN72fHxaiNf9lqhkLTe4g9ToddFHpWH-iMekzO8apbER7c2Watq3S~o1067YNwLbNnDsMPvXoWKQn4At8b2tqeF70AjZ3QGd0gSekFDjeEpJJh3EiEXF7nVK5zQBJ3KYhwPE21AWAJ39RipaP1f~~eCnFn1VCLe8UlQdWhijlsB7I6vtD3cPkMFiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <div className='topred-pokedex'></div>
            <div className='topblack-pokedex'></div>
            <div className='home-detail'>
                <div className='detail'>
                    <div className='imgs-detail'>
                        <img className='img-home' src={pokemon.sprites?.other.home.front_default} alt="" />
                    </div>
                    <h1>{pokemon.name}</h1>
                    <h2>#{id}</h2>
                    <p><b>Types: </b>{types()}</p>
                    <p><b>Abilities: </b>{abilities()}</p>
                    <p><b>height: </b>{pokemon.height}</p>
                    <p><b>weight: </b>{pokemon.weight}</p>
                </div>
                <div className='stats'>
                    <h2>Statics</h2>
                    <ul className='stats-list'>
                        {
                            pokemon.stats?.map( stat =>(
                                <li key={stat.stat.url}>
                                    <label htmlFor="pokerbar">{stat.stat.name}</label>
                                    <progress id="pokebar" max="100" value={stat.base_stat} className='prog'>{stat.base_stat}</progress>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='movements'>
            <h2>Movements</h2>
                <ul className='movements-list'>
                    {
                        pokemon.moves?.map( moves =>(
                            <li key={moves.move.url}>
                                {moves.move.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PokemonDetail;
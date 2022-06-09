import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';

const UserInput = () => {

    const [ userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        dispatch(changeUser(userName));
        navigate("/pokedex")
    }


    return (
        <>
            <div className="top"></div>
            <div className='left'></div>
            <div className="rigth"></div>
            <div className="bottom"></div>
            <img className='img-input' src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1655683200&Signature=KQ~0B3BiephZvobLH6S66rdPWbh4JBc0JGuqp5UXQ9HNAQMI5lGgNt2uvKV3F~67wgZrn3OsnsU4n6tAIoE5YiEIJv4R6jGxIvTQwKrpynUYDUfDouMfUA6iis6lj1TWxpXtn77bHzd2r82MNN3S-eg1ixRvfqN72fHxaiNf9lqhkLTe4g9ToddFHpWH-iMekzO8apbER7c2Watq3S~o1067YNwLbNnDsMPvXoWKQn4At8b2tqeF70AjZ3QGd0gSekFDjeEpJJh3EiEXF7nVK5zQBJ3KYhwPE21AWAJ39RipaP1f~~eCnFn1VCLe8UlQdWhijlsB7I6vtD3cPkMFiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <form>
                <h1 className='h1-input'>Hello coach</h1>
                <p>let's start with your name</p>
                <input className='input' type="text" value={userName} onChange={e => setUserName(e.target.value)} />
                <button className='input-btt' onClick={getName}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
            <img className='gift-input' src="https://www.gifsanimados.org/data/media/1446/pokemon-imagen-animada-0082.gif" alt="" />
        </>
    );
};

export default UserInput;
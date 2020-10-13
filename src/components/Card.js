import React from 'react'

export default function Card({character, addToFavorites, removeFavorite}){
    function handleClick(){
        if(addToFavorites){
            addToFavorites(character)
        } else {
            removeFavorite(character)
        }
    }
    
    return(
        <li>
            <h2>{character.name}</h2>
            <img src={character.image} alt="" onClick={handleClick}/>
        </li>
    )
}
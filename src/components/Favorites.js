import React from 'react'
import Card from './Card'

export default function Favorites({favorites, removeFavorite}){

    const showCharacters = () => favorites.map(character=> <Card removeFavorite={removeFavorite} character={character} />)
    
    return(
        <ul className="favorite-list">
            {showCharacters()}
        </ul>
    )
}
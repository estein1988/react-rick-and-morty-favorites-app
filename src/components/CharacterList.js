import React from 'react'
import Card from './Card'

export default function CharacterList({characters, addToFavorites}){

    const showCharacters = () => characters.map(character=> <Card character={character} addToFavorites={addToFavorites} />)
    
    return(
        <ul className="character-list">
            {showCharacters()}
        </ul>
    )
}
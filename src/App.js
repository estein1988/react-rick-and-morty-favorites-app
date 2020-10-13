import React, { Component } from 'react';
import Favorites from './components/Favorites'
import CharacterList from './components/CharacterList'
import './App.css';

class App extends Component {
  
  state = {
    characters: [],
    favorites: []
  }

  componentDidMount(){
    this.getCharacters()
  }

  getCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => this.setState( {characters: data.results} ))
  }

  removeFavorite = (character) => {
    let favorites = this.state.favorites.filter(favorite => favorite !== character)
    this.setState({favorites: favorites})
  }

  //if you DON'T find a character with the top line, add favorites / setState. if you do find it, the set state function won't run.
  addToFavorites = (character) => {
    let foundCharacter = this.state.favorites.find(favorite => character.id === favorite.id)
    if(!foundCharacter){
      this.setState({
        favorites: [...this.state.favorites, character]
      })
    }
  }

  render(){
  return (
    <div className="App">
      <Favorites removeFavorite={this.removeFavorite} favorites={this.state.favorites} />
      <CharacterList addToFavorites={this.addToFavorites} characters={this.state.characters} />
    </div>
  )}
}

export default App;

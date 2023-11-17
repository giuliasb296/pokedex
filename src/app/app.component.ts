import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/imgProfile.jpg";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

  

  //Abaixo, estão os pokémons adicionados:
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu', '../assets/pikachu.png'),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Venenoso'], 'Esse é o Bulbasaur', '../assets/bulbasaur.png'),
    new Pokemon(3, 'Charmander', ['Fogo'], 'Esse é o Charmander', '../assets/charmander.png'),
    new Pokemon(4, 'Squirtle', ['Água'], 'Esse é o Squirtle', '../assets/squirtle.png'),
    new Pokemon(5, 'Geodude', ['Pedra'], 'Esse é o Geodude', '../assets/geodude1.jpg'),
    new Pokemon(6, 'Celebi', ['Mítico'], 'Esse é o Celebi', '../assets/Celebi (1).webp'),
    new Pokemon(7, 'Eevee', ['Normal'], 'Esse é o Eevee', '../assets/eevee1.webp'),
    new Pokemon(8, 'Gengar', ['Fantasma'], 'Esse é o Gengar', '../assets/gengar.png'),
    new Pokemon(9, 'Oshawott', ['Água'], 'Esse é o Oshawott', '../assets/oshawott.png'),
    new Pokemon(10, 'Meowth', ['Normal'], 'Esse é o Meowth', '../assets/meowth.png'),
    new Pokemon(11, 'Sneasel', ['Gelo'], 'Esse é o Sneasel', '../assets/sneasel.jpg'),
    new Pokemon(12, 'Machoke', ['Lutador'], 'Esse é o Machoke', '../assets/Machoke.webp'),
    new Pokemon(13, 'Golbat', ['Voador'], 'Esse é o Golbat', '../assets/Golbat.webp'),
    new Pokemon(14, 'Sableye', ['Sombrio'], 'Esse é o Sableye', '../assets/sableye.webp'),
    new Pokemon(15, 'ButterFree', ['Inseto'], 'Esse é o ButterFree', '../assets/butterfre.webp'),
    new Pokemon(16, 'Rhydon', ['Pedra', 'Terra'], 'Esse é o Rhydon', '../assets/rhydon.webp'),
  ];
  //Agora teremos os códigos da página de informação do pokémon:
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  

  closeModal() {
    this.selectedPokemon = undefined;
  }
  
  filterValue: string = '';
  filteredPokemons() : Pokemon[]{
    if (!this.filterValue){
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }
};




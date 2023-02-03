import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  cards: Card[] = [];

  currentPage: number = 1;

  loading: boolean = true;
  constructor(private pokemonService: PokemonService) {
  }
  ngOnInit(): void {
    this.pokemonService.getAllPokeCards()
      .subscribe((value: any) => {
        this.loading = false;
        this.cards = value.data.cards;
      })
  }
}

import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];
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

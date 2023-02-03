import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";
import {ActivatedRoute, Params, Router} from "@angular/router";
import Data from "../../types/Data";
import CardData from "../../types/CardData";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.sass']
})
export class DetailsPageComponent implements OnInit {

  card!: Card;

  loader: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private routes: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routes.params
      .subscribe((params: Params) => {
        this.pokemonService.getPokemonById(params['id'])
          .subscribe((data: Data<CardData>) => {
            this.card = data.data.card;
            this.loader = false;
          });
      })
  }

}

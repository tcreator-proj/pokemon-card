import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";
import {ActivatedRoute, QueryParamsHandling} from "@angular/router";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {

  cards: Card[] = [];

  qParams!: QueryParams;

  currentPage: number = 1;

  loading: boolean = true;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.pokemonService.getAllPokeCards()
      .subscribe((value: any) => {
        this.loading = false;
        this.cards = value.data.cards;
      })

    this.route.queryParams.subscribe((qp) => {
      this.qParams = qp;

      this.currentPage = this.qParams.page || 1;
    })
  }
}

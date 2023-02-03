import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";
import {ActivatedRoute} from "@angular/router";
import QueryParams from "../../types/QueryParams";
import queryParams from "../../types/QueryParams";

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
    this.route.queryParams.subscribe((qp: QueryParams) => {
      this.qParams = qp;
      this.currentPage = this.qParams.page || 1;

      this.pokemonService
        .getAllPokeCards(this.currentPage,5)
        .subscribe((value: any) => {
          console.log(this.currentPage)
          this.loading = false;
          this.cards = value.data.cards;
        })
    })
  }
}

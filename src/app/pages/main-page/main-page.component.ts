import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import Card from "../../types/Card";
import {ActivatedRoute} from "@angular/router";
import QueryParams from "../../types/QueryParams";
import RequestConfig from "../../types/RequestConfig";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  readonly PAGE_COUNT: number = 10;
  cards!: Card[];
  currentPage: number = 1;
  queryParams!: QueryParams;
  loading: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((qp: QueryParams) => {
      this.queryParams = {...qp};
      const {page, name, category, rarity}: QueryParams = qp;

      this.currentPage = page || 1;

      const requestConfig: RequestConfig = {
        pagination: {
          page: +this.currentPage,
          count: this.PAGE_COUNT
        },
        filters: {name, category, rarity}
      }

      this.pokemonService
        .getPokeCards(requestConfig)
        .subscribe((value: any) => {
          this.loading = false;
          this.cards = value.data.cards;
        })
    })
  }
}

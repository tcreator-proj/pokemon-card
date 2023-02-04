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

  cards: Card[] = [];

  currentPage: number = 1;

  loading: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((qp: QueryParams) => {
      const {page, name, category, rarity}: QueryParams = qp

      this.currentPage = page || 1;

      const requestConfig: RequestConfig = {
        pagination: {
          page: +this.currentPage,
          count: 10
        },
        filters: {
          name: "Pika"
        }
      }

      if (page) {

      }

      if (name) {

      }

      this.pokemonService
        .getAllPokeCards(requestConfig)
        .subscribe((value: any) => {
          console.log(this.currentPage)
          this.loading = false;
          this.cards = value.data.cards;
        })
    })

  }
}

import {Injectable} from '@angular/core';
import {Apollo, gql, graphql} from "apollo-angular";
import {Observable} from "rxjs";
import Data from "../types/Data";
import CardData from "../types/CardData";
import RequestConfig from "../types/RequestConfig";
import {parseJSON} from "apollo-angular/schematics/utils";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apollo: Apollo) {
  }

  getDataByFields(fields: string[]) {
    const fieldString: string = fields.join(" ");
    return this.apollo.query({
      query: gql`
        query {
          cards {
            ${fieldString}
          }
        }
      `
    })
  }

  getPokeCards(params: RequestConfig, fields: string[] = ['id', 'rarity', 'name', 'category']) {
    const {pagination, filters} = params;
    const fieldString: string = fields.join(" ");
    return this.apollo.query({
      variables: {
        ...pagination, ...filters
      },
      query: gql`
        query getAllCards(
          $page: Float!
          $count: Float!
          $illustrator: String
          $name: String
          $category: String
          $rarity: String
        ){
          cards(
            pagination: {
              page: $page
              count: $count}
            filters: {
              illustrator: $illustrator
              category: $category
              name: $name
              rarity: $rarity
            }) {
            ${fieldString}
          }
        }
      `
    })
  }

  getPokemonById(cardId: string): Observable<Data<CardData>> {
    return this.apollo.query({
      query: gql`
        query {
          card(id: "${cardId}") {
            id
            hp
            name
            category
            item {
              name
            }
          }
        }
      `
    })
  }

}

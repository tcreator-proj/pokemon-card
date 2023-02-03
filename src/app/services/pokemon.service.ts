import {Injectable} from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {Observable} from "rxjs";
import Data from "../types/Data";
import CardData from "../types/CardData";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private apollo: Apollo) { }

  getAllPokeCards(page: number, count: number) {
    return this.apollo.query({
      query: gql`
        query {
          cards(pagination: {count: ${count}, page: ${page}}) {
            id
            hp
            name
            category
            rarity
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

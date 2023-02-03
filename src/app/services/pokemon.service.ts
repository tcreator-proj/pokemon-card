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

  getAllPokeCards() {
    return this.apollo.query({
      query: gql`
        query {
          cards(pagination: {count: 25, page: 6}) {
            id
            hp
            name
            item {
               name
            }
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
            item {
              name
            }
          }
        }
      `
    })
  }

}

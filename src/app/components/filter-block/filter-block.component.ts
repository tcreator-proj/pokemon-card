import {Component, Input, OnInit} from '@angular/core';
import Card from "../../types/Card";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.sass']
})
export class FilterBlockComponent implements OnInit {
  @Input() header!: string;
  @Input() cardList!: Card[];
  @Input() categoryQuery: string = "";
  @Input() nameQuery: string = "";
  @Input() rarityQuery: string[] = [];

  checkBoxLoader: boolean = false;
  rarityList!: string[];
  categoriesList!: string[];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService
      .getDataByFields(['rarity', 'category'])
      .subscribe((value: any) => {
        const rarities: string[] = value.data.cards.map((card: Card) => card.rarity);
        const categories: string[] = value.data.cards.map((card: Card) => card.category);

        this.rarityList = Array.from(new Set(rarities));
        this.categoriesList = Array.from(new Set(categories));
      })
  }


}

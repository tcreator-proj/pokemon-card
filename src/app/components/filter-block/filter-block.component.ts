import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import Card from "../../types/Card";
import {PokemonService} from "../../services/pokemon.service";
import Data from "../../types/Data";

@Component({
  selector: 'app-filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.sass']
})
export class FilterBlockComponent implements OnInit{
  @Input() header!: string;
  @Input() inputValue: string = "";
  @Input() cardList!: Card[];
  rarityList: string[] = [];

  checkBoxLoader: boolean = false;

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService
      .getDataByFields(['rarity'])
      .subscribe((value: any) => {
        const rarities: string = value.data.cards.map((card: Card) => card.rarity)
        this.rarityList = Array.from(new Set(rarities));
        this.checkBoxLoader = true;
      })
  }


}

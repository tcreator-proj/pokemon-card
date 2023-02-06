import { Component, OnDestroy, OnInit } from '@angular/core'
import { PokemonService } from '../../services/pokemon.service'
import Card from '../../types/Card'
import { ActivatedRoute } from '@angular/router'
import QueryParams from '../../types/QueryParams'
import RequestConfig from '../../types/RequestConfig'
import { SharedService } from '../../services/shared.service'
import Data from '../../types/Data'
import CardsData from '../../types/CardsData'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  readonly PAGE_COUNT: number = 10
  cards!: Card[]
  currentPage = 1

  nameQuery = ''
  rarityQuery: string[] = []
  categoryQuery = ''

  loading = true

  constructor(
    private sharedData: SharedService,
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((qp: QueryParams) => {
      const { page, name, category, rarity }: QueryParams = qp

      this.nameQuery = name || ''
      this.categoryQuery = category || ''
      if (rarity) {
        this.rarityQuery = rarity.trim().split(',')
      }

      this.currentPage = page || 1

      const requestConfig: RequestConfig = {
        pagination: {
          page: +this.currentPage,
          count: this.PAGE_COUNT,
        },
        filters: { name, category, rarity },
      }

      this.pokemonService.getPokeCards(requestConfig).subscribe((value) => {
        const data: Data<CardsData> = <Data<CardsData>>value
        this.loading = false
        this.cards = data.data.cards
      })
    })
  }

  ngOnDestroy(): void {
    this.route.queryParams
      .subscribe((params: QueryParams) => {
        this.sharedData.setQueryData(params)
      })
      .unsubscribe()
  }
}

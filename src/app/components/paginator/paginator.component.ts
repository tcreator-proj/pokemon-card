import { Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import QueryParams from '../../types/QueryParams'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass'],
})
export class PaginatorComponent {
  @Input() page!: number
  @Input() end!: boolean

  constructor(private route: ActivatedRoute, private router: Router) {}
  nextPage() {
    this.route.queryParams
      .subscribe((queryParams: QueryParams) => {
        this.router.navigate(['/'], {
          queryParams: {
            ...queryParams,
            page: +this.page + 1,
          },
        })
      })
      .unsubscribe()
  }

  previousPage() {
    this.route.queryParams
      .subscribe((queryParams: QueryParams) => {
        this.router.navigate(['/'], {
          queryParams: {
            ...queryParams,
            page: +this.page - 1,
          },
        })
      })
      .unsubscribe()
  }
}

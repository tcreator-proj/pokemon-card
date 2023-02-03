import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent {
  @Input() page!: number;

  constructor(private router: Router) {
  }
  increase() {
    this.router.navigate(["/"], {
      queryParams: {
        page: +this.page + 1
      }
    })
  }

  decrease() {
    this.router.navigate(["/"], {
      queryParams: {
        page: +this.page - 1
      }
    })
  }
}

import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Throttle from "../../decorators/Debounce";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.sass']
})
export class InputFilterComponent {
  @Input() value: string = "";
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  @Throttle(1000)
  inputFilter(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    const {value} = target;

    const page: QueryParams = value ? {name: value} : {}
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.router.navigate(['/'], {
        queryParams: {
          ...params,
          ...page
        }
      })
    }).unsubscribe()

  }
}

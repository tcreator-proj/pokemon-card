import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import Throttle from "../../decorators/Debounce";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.sass']
})
export class InputFilterComponent {
  constructor(private router: Router) {
  }
  @Throttle(1000)
  inputFilter(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    const {value} = target;

    const qParams: QueryParams = value ? {name: value} : {}
    this.router.navigate(['/'], {
      queryParams: qParams
    })
  }
}

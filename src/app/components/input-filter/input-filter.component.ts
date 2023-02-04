import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import Throttle from "../../decorators/Debounce";

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
    console.log(value)

    // this.router.navigate(['/'], {
    //
    // })
  }
}

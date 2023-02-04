import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.sass']
})
export class InputFilterComponent {
  constructor(private router: Router) {
  }
  inputFilter(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    const {value} = target;
    console.log(value)

    this.router.navigate(['/'], {

    })
  }
}

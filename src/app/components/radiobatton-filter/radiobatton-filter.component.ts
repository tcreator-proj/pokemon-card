import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-radiobatton-filter',
  templateUrl: './radiobatton-filter.component.html',
  styleUrls: ['./radiobatton-filter.component.sass']
})
export class RadiobattonFilterComponent {
  @Input() categories!: string[];
  @Input() defaultValue: string = '';

  constructor(private router: Router) {
  }
  toNavigate(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    this.router.navigate(['/'], {
      queryParams: {
        category: target.value
      }
    })
  }

}

import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-radiobatton-filter',
  templateUrl: './radiobatton-filter.component.html',
  styleUrls: ['./radiobatton-filter.component.sass']
})
export class RadiobattonFilterComponent {
  @Input() categories!: string[];
  @Input() defaultValue: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }
  toNavigate(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    this.route.queryParams.subscribe((params: QueryParams) => {
      this.router.navigate(['/'], {
        queryParams: {
          ...params,
          category: target.value
        }
      })
    }).unsubscribe()

  }

}

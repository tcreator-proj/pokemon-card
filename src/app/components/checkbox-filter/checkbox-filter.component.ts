import {Component, Input, OnChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.sass']
})
export class CheckboxFilterComponent{
  @Input() rarityList!: string[];
  @Input() defaultChecked!: string[];
  choosesField: string = "Выбраны 0";

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  onChange(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    const form: HTMLFormElement = <HTMLFormElement>target.form;
    const checkedInputs = Array.from(form)
      .filter((el: any) => el.checked)
      .map((input: any) => input.id);
    this.choosesField = `Выбраны ${checkedInputs.length}`

    this.route.queryParams.subscribe((params: QueryParams) => {
      this.router.navigate(['/'], {
        queryParams: {
          ...params,
          rarity: checkedInputs.join()
        }
      })
    }).unsubscribe()

  }

  checkDefault(value: string): boolean {
    if(!this.defaultChecked.length) return false;
    return this.defaultChecked.includes(value)
  }


}

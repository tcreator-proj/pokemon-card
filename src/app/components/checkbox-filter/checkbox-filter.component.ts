import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import QueryParams from "../../types/QueryParams";

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.sass']
})
export class CheckboxFilterComponent implements OnInit {
  @Input() rarityList!: string[];
  @Input() defaultChecked!: string[];
  toggledList = false;
  choosesField!: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const defLen: number = this.defaultChecked.length;
    this.choosesField = `Выбраны ${defLen}`;
  }

  onChange(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    const form: HTMLFormElement = <HTMLFormElement>target.form;
    const checkedInputs = Array.from(form)
      .filter((el: Element) => (<HTMLInputElement> el).checked)
      .map((input) => input.id);
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

  toggle() {
    this.toggledList = !this.toggledList;
  }
}

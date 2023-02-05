import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.sass']
})
export class CheckboxFilterComponent {
  @Input() rarityList!: string[];
}

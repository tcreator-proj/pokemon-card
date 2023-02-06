import { Component, Input } from '@angular/core'
import Card from '../../types/Card'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
})
export class CardItemComponent {
  @Input() card!: Card
}

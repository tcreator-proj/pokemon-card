import { Component, Input } from '@angular/core'
import Card from '../../types/Card'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass'],
})
export class CardListComponent {
  @Input() cardList!: Card[]
}

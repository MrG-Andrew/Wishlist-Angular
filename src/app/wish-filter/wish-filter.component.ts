import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent {
  ngOnInit() {
    this.filter.emit(filters[0]);
  }

  @Output() filter = new EventEmitter();

  filterSelect: string = '0';

  filterChange(value: string) {
    this.filter.emit(filters[value]);
  }
}

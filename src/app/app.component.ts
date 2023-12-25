import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from './shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Buy a new car'),
    new WishItem('Buy a new house'),
    new WishItem('Buy a new bike', true),
    new WishItem('Buy a new boat'),
  ];

  title: string = 'Wishlist';
  newWish: string = '';
  filterSelect: string = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.filterSelect]);
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  handleAddWish(e: Event) {
    e.preventDefault();
    this.items.push(new WishItem(this.newWish));
    this.newWish = '';
  }

  handleDeleteWish(item: WishItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

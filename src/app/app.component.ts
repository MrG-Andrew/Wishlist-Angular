import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishItem } from './shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { EventService } from './shared/services/EventService';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Buy a new car'),
    new WishItem('Buy a new house'),
    new WishItem('Buy a new bike', true),
    new WishItem('Buy a new boat'),
  ];

  filter: any;

  constructor(events: EventService) {
    events.listen('removeWish', (wish) => {
      let wishIndex = this.items.indexOf(wish);
      this.items.splice(wishIndex, 1);
    });
  }
}

import { LineItem } from './../../../core/entities/line-item/line-item.model'
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/core/entities/cart/cart.model';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent {
  @Input() cart?: Cart
  @Output() placeEvent = new EventEmitter<void>
  
  constructor() {}

  placeOrder() {
    this.placeEvent.emit()
  }

  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productsData: any;
  @Output() cartItem: EventEmitter<any> = new EventEmitter();

  addToCart(item: any) {
    this.cartItem.emit(item);
  }
}

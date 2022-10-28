import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() isBasket: any;
  @Input() basketData: any;
  @Input() totalPrice: any;
  @Output() isBasketChanged: EventEmitter<any> = new EventEmitter();
  @Output() decreaseId: EventEmitter<any> = new EventEmitter();
  @Output() increaseId: EventEmitter<any> = new EventEmitter();
  @Output() removeCartId: EventEmitter<any> = new EventEmitter();

  closeBasket() {
    this.isBasket = false;
    this.isBasketChanged.emit(this.isBasket);
  }

  decrease(item: any) {
    this.decreaseId.emit(item);
  }

  increase(item: any) {
    this.increaseId.emit(item);
  }

  removeFromCart(id: any) {
    this.removeCartId.emit(id);
  }

}

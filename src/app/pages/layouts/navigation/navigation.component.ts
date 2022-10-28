import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() basketData: any[] = [];
  @Input() isBasket: any;
  @Output() isBasketChanged: EventEmitter<any> = new EventEmitter();

  isBasketAction() {
    this.isBasket = true;
    this.isBasketChanged.emit(this.isBasket);
  }
}

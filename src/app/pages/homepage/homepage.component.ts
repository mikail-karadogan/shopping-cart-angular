import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Electronics Category";

  productsData: any[] = [
    {
      id: 1,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 2,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 3,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 4,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 5,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 6,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    },
    {
      id: 7,
      title: 'iphone "14 pro max 128gb ram',
      description: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      price: 30000,
      currency: 'TL',
      image_set: [
        {
          id: 1,
          url: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/pasaj/crop/cg/1663936313039/3-1663936308008.png'
        },
        {
          id: 2,
          url: 'https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/pasaj/crop/cg/1663935873205/1-1663935865636/1-1663935865636_600x450.png'
        }
      ]
    }
  ];

  basketData: any[] = [];

  isBasket: any = false;

  @Input() isBasketChanged: any;

  isBasketAction($event: any) {
    this.isBasket = $event;
  }

  removeFromCart(id: any) {
    let itemIndex = this.basketData.findIndex((state) => {
      return id == state.basketItem.id;
    });

    this.basketData.splice(itemIndex, 1);
    this.totalCountReducer();
  }

  addToCart($event: any) {
    let itemIndex = this.basketData.findIndex((state) => {
      return $event.id == state.basketItem.id;
    });

    if (itemIndex >= 0) {
      this.basketData[itemIndex].quantity += 1;
    } else {
      this.basketData.push({ basketItem: $event, quantity: 1 });
    }
    this.totalCountReducer();
  }

  decrease(id: any) {
    let itemIndex = this.basketData.findIndex((state) => {
      return id == state.basketItem.id;
    });

    if (itemIndex >= 0 && this.basketData[itemIndex].quantity > 1) {
      this.basketData[itemIndex].quantity -= 1;
    } else {
      this.basketData.splice(itemIndex, 1);
    }
    this.totalCountReducer();
  }

  increase(id: any) {
    let itemIndex = this.basketData.findIndex((state) => {
      return id == state.basketItem.id;
    });

    if (itemIndex >= 0) {
      this.basketData[itemIndex].quantity += 1;
    }
    this.totalCountReducer();
  }

  totalPrice: any;
  totalCountReducer() {
    this.totalPrice = this.basketData.reduce((total, current) => {
      return total + (current.basketItem.price * current.quantity);
    }, 0);
  }
}

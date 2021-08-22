import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shop-cart-protocol';

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountStrategy: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return this._items.reduce((total, next) => total + next.price, 0);
  }

  totalWidthDiscount(): number {
    return this.discountStrategy.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}

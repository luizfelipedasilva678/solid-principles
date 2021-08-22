import { OrderStatus } from '../srp/interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from './messaging';
import { Persistence } from './persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly saveOrder: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your order with total of ${this.cart.total()} was received`,
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
  }
}

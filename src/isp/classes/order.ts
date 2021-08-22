import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Messaging } from '../services/messaging';
import { Persistence } from './persistence';
import { CustomerOrder } from './interfaces/customer-protocol';
export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly saveOrder: Persistence,
    private readonly Customer: CustomerOrder,
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
      `Your order with total of ${this.cart.totalWidthDiscount()} was received`,
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(this.Customer.getName());
  }
}

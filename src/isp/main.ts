/**/

import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistence } from './classes/persistence';
import { Messaging } from './services/messaging';
import { Product } from './classes/products';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';
import { Individual } from './classes/customer';

const fifty = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const individualCustomer = new Individual('Luiz', 'mIranda', '111.111.111');
const order = new Order(
  shoppingCart,
  messaging,
  persistence,
  individualCustomer,
);

shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWidthDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

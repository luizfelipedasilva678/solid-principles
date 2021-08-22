/*
  Open/ closed principle
*/

import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistence } from './classes/persistence';
import { Messaging } from './services/messaging';
import { Product } from './classes/products';
import { FiftyPercentDiscount } from './classes/discount';

const fifty = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fifty);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));

console.log(shoppingCart.total());
console.log(shoppingCart.totalWidthDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

import { Order } from './entities/order';
import { ShoppingCart } from './entities/shopping-cart';
import { Persistence } from './entities/persistence';
import { Messaging } from './services/messaging';
import { Product } from './entities/products';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));
shoppingCart.addItem(new Product('camisa', 20.0));

console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

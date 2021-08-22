/*
  Liskov substitution principle (Princípio da substituição de Liskov) -
  Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
  deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

  Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

  Mais simples ainda: Se meu programa espera um Animal, algo do tipo
  Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

import { Order } from './classes/order';
import { ShoppingCart } from './classes/shopping-cart';
import { Persistence } from './classes/persistence';
import { Messaging } from './services/messaging';
import { Product } from './classes/products';
import { FiftyPercentDiscount, NoDiscount } from './classes/discount';

const fifty = new FiftyPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
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

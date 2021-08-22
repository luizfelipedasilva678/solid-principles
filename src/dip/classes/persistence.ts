import { PersistenceProtocol } from './interfaces/persistence-protocol';

export class Persistence implements PersistenceProtocol {
  saveOrder(): void {
    console.log('Order save with success...');
  }
}

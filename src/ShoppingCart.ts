import { Item } from './Item';

export class ShoppingCart {
  
  private items: Array<Item> = [];

  constructor() {
    this.items = [];
    return this;
  }

  addProduct(item: Item) {
    this.items.push(item);
  }

  count() {
    return this.items.length;
  }

}
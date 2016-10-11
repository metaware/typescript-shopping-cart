import { Item } from './Item';
import * as _ from 'lodash';

export class ShoppingCart {
  
  private items: Array<Item> = [];

  constructor() {
    return this;
  }

  addProduct(item: Item) {
    if (this.items.length < 3) {
      this.items.push(item);
    }
  }

  count() {
    return this.items.length;
  }

  calculateSubTotal() {
    return _.sumBy(this.items, 'price');
  }

  checkout() {
    if (this.items.length == 0) {
      throw new Error("Cannot checkout an empty cart")
    }
    this.clear();
  }

  clear() {
    this.items = [];
  }

}
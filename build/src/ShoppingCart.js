"use strict";
const _ = require('lodash');
class ShoppingCart {
    constructor() {
        this.items = [];
        return this;
    }
    addProduct(item) {
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
            throw new Error("Cannot checkout an empty cart");
        }
        this.clear();
    }
    clear() {
        this.items = [];
    }
}
exports.ShoppingCart = ShoppingCart;

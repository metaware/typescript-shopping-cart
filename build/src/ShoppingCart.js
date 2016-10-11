"use strict";
class ShoppingCart {
    constructor() {
        this.items = [];
        this.items = [];
        return this;
    }
    addProduct(item) {
        this.items.push(item);
    }
    count() {
        return this.items.length;
    }
}
exports.ShoppingCart = ShoppingCart;

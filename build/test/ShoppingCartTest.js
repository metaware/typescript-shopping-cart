"use strict";
require('./spec_helper.js');
const ShoppingCart_1 = require('../src/ShoppingCart');
var chai = require('chai');
describe('ShoppingCart', function () {
    describe('#addProduct', function () {
        it('should add product to the cart', function () {
            var cart = new ShoppingCart_1.ShoppingCart();
            var item = {
                name: 'Samsung S7 Phone',
                price: 729.99
            };
            cart.addProduct(item);
            chai.expect(cart.count()).to.be.eq(1);
        });
    });
});

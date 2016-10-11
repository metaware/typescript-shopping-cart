require('./spec_helper.js');
import { ShoppingCart } from '../src/ShoppingCart';
import { Item } from '../src/Item';

var chai = require('chai');

describe('ShoppingCart', function () {

  describe('#addProduct', function () {
    it('should add product to the cart', function () {
      var cart = new ShoppingCart();
      var item: Item = {
        name: 'Samsung S7 Phone',
        price: 729.99
      }
      cart.addProduct(item);
      chai.expect(cart.count()).to.be.eq(1);
    });
  });

});
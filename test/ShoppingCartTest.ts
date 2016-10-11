require('./spec_helper.js');
import { ShoppingCart } from '../src/ShoppingCart';
import { Size } from '../src/Item';
import { Item } from '../src/Item';

var chai = require('chai');

describe('ShoppingCart', function () {

  let item: Item = {
    name: 'Mens TShirt',
    price: 35.99,
    size: Size.Medium
  }

  describe('#addProduct', function () {

    it('should add product to the cart', function () {
      let cart = new ShoppingCart();
      cart.addProduct(item);
      chai.expect(cart.count()).to.be.eq(1);
    });

    it('should not allow more than 3 products in the cart', function () {
      let cart = new ShoppingCart();
      var times = 5;
      for(var i=0; i < times; i++){
        cart.addProduct(item);
      }
      chai.expect(cart.count()).to.be.eq(3);
    });

  });

  describe('#calculateTotal', function () {
    
    it('should calculate the correct total, respecting quantity', function () {
      let cart = new ShoppingCart();
      cart.addProduct(item);
      cart.addProduct(item);
      chai.expect(cart.calculateSubTotal()).to.be.eq(71.98);
    });
    
  });

  describe('#checkout', () => {

    it('should empty the cart', () => {
      let cart = new ShoppingCart();
      cart.addProduct(item);
      cart.checkout();
      chai.expect(cart.count()).to.be.eq(0);
    })

    it('cannot checkout an empty cart', () => {
      let cart = new ShoppingCart();
      chai.expect(cart.checkout).to.throw(Error);
    })

  })

  describe('#clear', () => {

    it('should empty the cart', () => {
      let cart = new ShoppingCart();
      cart.addProduct(item);
      cart.clear();
      chai.expect(cart.count()).to.be.eq(0);
    })

  })

});
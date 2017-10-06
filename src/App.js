import React, { Component } from 'react';
import './App.css';

class ProductList extends Component {
  render() {
    return (
      <div>
        <Product />
      </div>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={'http://lajpatraimarket.in/skin/extensions/cardealer/images/no-image-460x290.png'} width={'150px'} alt="myImage"/>
        </div>
        <div className="middle aligned content">
          <a href="">Fort Knight</a>
          <p>Authentic renaissance actors, delivered in just two weeks</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={'https://lawfarm.in/assets/default-avatar-25d12326da7a8a5adc9a191e63d512e3c8345d1ab03eacbf9a89f24f2ce7f1c6.png'} width={'30px'} alt="mySecondImage"/>
        </div>
      </div>
    );
  }
}

export default Product;

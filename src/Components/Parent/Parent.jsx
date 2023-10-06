import React, { Component } from 'react';
import Child from '../Child/Child';

class Parent extends Component {
  state = {
    products: [
      { id: 1, model: 'Toshiba', name: 'Refrigerator', price: 500 },
      { id: 2, model: 'Samsung', name: 'TV', price: 800 },
      { id: 3, model: 'Tornado', name: 'Water heater', price: 150 },
      { id: 4, model: 'Sharp', name: 'Air-conditioner', price: 670 },
    ],
  };

  componentDidMount() {
    // Load products from local storage when the component mounts
    const storedProducts = JSON.parse(localStorage.getItem('products'));

    if (!storedProducts) {
      // If products are not in local storage, set them using the default state
      localStorage.setItem('products', JSON.stringify(this.state.products));
    } else {
      // If products are in local storage, update the state with the stored products
      this.setState({ products: storedProducts });
    }
  }

  componentDidUpdate(prevState) {
    // Save products to local storage when the component updates
    if (prevState.products !== this.state.products) {
      localStorage.setItem('products', JSON.stringify(this.state.products));
    }
  }

  increasePrice = (index) => {
    const updatedProducts = [...this.state.products];
    updatedProducts[index].price += 10;
    this.setState({ products: updatedProducts });
  }

  deleteProduct = (index) => {
    const updatedProducts = [...this.state.products];
    updatedProducts.splice(index, 1);
    this.setState({ products: updatedProducts });
  }

  addProduct = () => {
    const newProduct = {
      id: this.state.products.length + 1,
      model: 'Mahmoud model',
      name: 'Mahmoud name',
      price: 999,
    };

    const updatedProducts = [...this.state.products, newProduct];
    this.setState({ products: updatedProducts });
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {this.state.products.map((product, index) => (
                <Child
                  key={product.id}
                  productDetails={product}
                  increasePrice={() => this.increasePrice(index)}
                  deleteProduct={() => this.deleteProduct(index)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <button className='btn btn-primary btn-block my-2' onClick={this.addProduct}>Add product</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Parent;

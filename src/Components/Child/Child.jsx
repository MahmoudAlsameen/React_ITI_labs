import { Component } from 'react'

export default class Child extends Component {
  render() {
    return <>
    
  <div className="col">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{this.props.productDetails.name}</h5>
       <h6 className='card-title'>{this.props.productDetails.model}</h6>
        <h6 className='card-title'>{this.props.productDetails.price} $</h6>
      </div>
      <button className='btn btn-dark mb-1' onClick={this.props.increasePrice}>Increase</button>
      <button className='btn btn-danger' onClick={this.props.deleteProduct}>Delete</button>
    </div>
  </div>

    
    </>
  }
}

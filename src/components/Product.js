import React from 'react'
import Rating from './Rating';

function Product(props) {
    const { product } = props;
    return (
        <div key={product._id} className="card">

            <a href={`/product/${product._id}`}>
                <img
                    className="medium"
                    src={product.image}
                    alt={product.name} />
            </a>

            <div className="card-body">

                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <span className="description">{product.description}</span>

                <Rating rating={product.rating} numReviews={product.numReviews} />

                <div className="price">{product.price + ' RSD'}</div>
                <button className="kupi">Kupi</button>

            </div>
        </div>
    )
}

export default Product

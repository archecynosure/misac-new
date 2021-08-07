import React from 'react'
import Landing from '../components/Landing'
import data from '../data';
import Product from '../components/Product';

function HomeScreen() {
    return (
        <div>
            <Landing />
            <div className="buttons">
                <button>Pantalone</button>
                <button>Haljine</button>
                <button>Benkice</button>
                <button>Kompleti</button>
                <button>Ostalo</button>
            </div>
            <div className="row center">
                {data.products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}

            </div>n
        </div>
    )
}

export default HomeScreen

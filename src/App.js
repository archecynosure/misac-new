import data from './data';
import Product from './components/Product';
import Landing from './components/Landing';

function App() {
  return (
    <div classNameName="App">
      <div className="grid-container">
        <header className="row">
          <div className="logo">
            <img src="./images/gerbil 4.svg" alt="logo" />
            <a href="/">
              <span>MIŠAC</span> </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
          </div>

        </header>
        <main>
          <Landing />
          <div className="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}

          </div>
        </main>
        <footer className="row center">
          All rights reserved
        </footer>
      </div>
    </div>
  );
}

export default App;

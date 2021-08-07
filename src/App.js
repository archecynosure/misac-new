import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <div className="grid-container">
          <header className="row">
            <div className="logo">
              <img src="./images/gerbil 4.svg" alt="logo" />
              <a href="/">
                <span>MIŠAC</span> </a>
            </div>
            <div className="rightHeader">
              <a href="/signin">Prijava</a>
              <a href="/signin">Korpa</a>
            </div>

          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="row center">
            All rights reserved
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

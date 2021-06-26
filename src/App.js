import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { NavBar } from './components/Header'
import { Cart } from './pages/Cart';
import  Form  from './pages/Form';
import { CartProvider } from './components/CartProvider';
import { Footer } from './components/Footer';
import Teste from './pages/Teste'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <GlobalStyle />
      <Switch>
        <CartProvider>
          <Route path="/" exact component={Home} />
          <Route path="/Carrinho" component={Cart} />
          <Route path="/CRUD" component={Form} />
          <Route path="/teste" component={Teste} />
        </CartProvider>
        
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

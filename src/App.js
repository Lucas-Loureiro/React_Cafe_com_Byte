import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { NavBar } from './components/Header'
import { Cart } from './pages/Cart';
import { Form } from './pages/Form';
import { CartProvider } from './components/CartProvider';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <GlobalStyle />
      <CartProvider>
        <Route path="/" exact component={Home} />
        <Route path="/Carrinho" component={Cart} />
      </CartProvider>
      <Route path="/CRUD" component={Form} />
    </BrowserRouter>
  );
}

export default App;

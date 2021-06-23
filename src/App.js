import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { NavBar } from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <GlobalStyle />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;

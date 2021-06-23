import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/Header/index';
import { GlobalStyle } from './styles/global';

function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
      </BrowserRouter>
  );
}

export default App;

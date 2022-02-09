import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

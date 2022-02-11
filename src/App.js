import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

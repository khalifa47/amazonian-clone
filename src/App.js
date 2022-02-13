import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(auth.getAuth(), (authUser) => {
      console.log(`User is logged as ${authUser}`);

      if (authUser) {
        //user logged
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

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

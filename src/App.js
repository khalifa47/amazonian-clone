import './App.css';
import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const promise = loadStripe('pk_test_51KTMyJAtsmAi8uByteNpr16MgMJBmHlNFz9jOEI9FE1Y8iDtRiNAtCFCnC70YbuIrnTYkm7g4LpBcUkNFR3qCOzk00HrVt2RSb');

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
          <Route path='/orders' element={[<Header />, <Orders />]} />
          <Route path='/checkout' element={[<Header />, <Checkout />]} />
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path='/' element={[<Header />, <Home />]} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;

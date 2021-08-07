import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import History from './components/History';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [ cartItems, setCartItems ] = useState(cartFromLocalStorage);
  const [ total, setTotal ] = useState(0);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const totalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * +cartItem.quantity;
    }, 0);
    setTotal(totalPrice)

  }, [cartItems])

  return (
    <Router>
      <Switch>
        <PublicRoute 
          exact path={['/shop', '/']}
          component={Shop}
          restricted={false}
          appProps={{cartItems, setCartItems, total }}
        />

        <PrivateRoute
          path='/cart'
          component={Cart}
          appProps={{ cartItems, setCartItems, total }}
        />
        
        <PublicRoute
          path='/login'
          restricted={true}
          component={Login}
          
        />
          
        <PublicRoute
          path='/register'
          restricted={true}
          component={Register}
        />

        <PrivateRoute
          path='/history'
          component={History}
          
        />    
      </Switch>
    
    </Router>
  );
}

export default App;

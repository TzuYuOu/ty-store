import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Login from './components/Login';
import Register from './components/Register';
import History from './components/History';


function App() {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [ cartItems, setCartItems ] = useState(cartFromLocalStorage);
  const [ total, setTotal ] = useState(0);
  const [ isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));

    const totalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * +cartItem.quantity;
    }, 0);
    setTotal(totalPrice)

  }, [cartItems])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setIsAuthenticated(true);
    }
  }, [])
  
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            exact path={['/shop', '/']}
            render = {(props) =>(
              <Shop {...props}    
                cartItems={cartItems}
                setCartItems={setCartItems}
                total={total}
                isAuthenticated={isAuthenticated}/>
            )}
          >
          </Route>
          <Route 
            path='/cart'
            render = {(props) =>(
              <Cart {...props}    
                cartItems={cartItems}
                setCartItems={setCartItems}
                total={total} />
            )}
          > 
          </Route>
          <Route
            path='/login'
            render = {(props) =>(
              <Login {...props}    
                 />
            )}
          />
            
          <Route
            path='/register'
            render = {(props) =>(
              <Register {...props}    
                 />
            )}
          />

          <Route
            path='/history'
            render = {(props) =>(
              <History {...props}    
                 />
            )}
          />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;

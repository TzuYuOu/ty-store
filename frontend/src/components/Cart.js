import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import orderService from '../services/order-service';
import Moment from 'moment'

const Cart = ({cartItems, setCartItems, total}) => {

  const history = useHistory();
  const initialDatetime = new Date();
  const [pickupDate, setPickupDate] = useState(Moment(initialDatetime).format('YYYY-MM-DD'));
  const [pickupTime, setPickupTime] = useState(Moment(initialDatetime).format('HH:mm'));
  const userId = JSON.parse(localStorage.getItem("userId"));

  const removeFromCart = (indexInCart) => {

    const newCartItems = cartItems.filter((item, index) => {
      return index !== indexInCart
    });
    setCartItems(newCartItems);
  }

  const sendOrder = () => {

    const order = {
      userId: userId,
      items: cartItems,
      pickupDate: pickupDate,
      pickupTime: pickupTime,
      totalPrice: total
    }

    // console.log(order)

    orderService.sendOrder(order)
      .then(res => {
        alert("Send successfully");
        setCartItems([]);
        history.push('/');
      })
      .catch(err => {
        alert("Send fail");
      })

    
  }

  return (
    <div >
      <Link to='/' className="btn btn-secondary m-2"><i className="bi bi-arrow-left"></i></Link>
      {
        cartItems.length > 0 ?
        <div className="container">
          <div className="container">
            <div className="row justify-content-center my-2 ">
              <button className="col-2 btn btn-warning mx-2">
                自取
              </button>

              <button className="col-2 btn btn-secondary mx-2 disabled">
                內用
              </button>
            </div>
            <div className="row justify-content-center my-3 ">
              <div className="col-lg-4 col-6 mr-3 ">
                <label className="mb-2 " htmlFor="pickdate" >取餐日期</label>
                <input value={pickupDate} onChange={(e)=>setPickupDate(e.target.value)} type="date"/>
              </div>
              <div className="col-lg-4 col-6 ">
                <label className="mb-2" htmlFor="picktime" >取餐時間</label>
                <input value={pickupTime} onChange={(e)=>setPickupTime(e.target.value)} type="time"/>
              </div>
            </div>
          </div>
        
          <hr/>
          <div className="containter">
          {
            cartItems.map((cartItem, index) =>
              <div className="row justify-content-between" key={index}>
                <div className="col-lg-4 col-6">
                  <h5 >{cartItem.name}</h5>
                  <span>{cartItem.quantity}</span>
                </div>
                <div className="col-lg-4 col-6 text-end">
                  <h6>${cartItem.quantity * cartItem.price}</h6>
                  <button onClick={() => removeFromCart(index)} className="btn"><i className="bi bi-trash"></i></button>
                </div>
                
              </div>
            
            )
          }
            <Link to='/' className="btn btn-warning">繼續購物</Link>
          </div>
          
          <hr/>
          <div className="container">
            <div className="row justify-content-between">
              <span className="col-2 ">總價</span>
              <span className="col-2 text-end">${total}</span>
            </div>
          </div>
          
          <hr/>
          
          <div className="container">
            <div className="row ">
              <button onClick={sendOrder} type="button" className="btn btn-success my-3 ">
                送出訂單
              </button>
            </div>
          </div>
          
        </div>
        : 
        <div className="row">
          <p className="col-4 offset-4 text-center">您的購物車沒有東西</p>
        </div>
      }
    </div>
  )
}

export default Cart

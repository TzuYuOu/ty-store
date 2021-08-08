import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import orderService from '../services/order-service';

const History = () => {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrders = () => {
    orderService.getOrder()
     .then(res => {
      
      setOrders(res.data);
      setIsLoading(false);
     })
     .catch(err => {
       console.log(err);
     })

  }

  useEffect(() => {
    getOrders();
  }, [])

  return (
    <div>
      {
        !isLoading &&
        <div className="container">
          <div className="row mt-3">
            <Link to='/' className="col-1"><i className="bi bi-arrow-left"></i></Link>
            <span className="col-11 text-center">歷史訂單</span>
          </div>
        
          {
            orders.length === 0 ?
              <div className="row">
                <p className="col-4 offset-4 text-center">您沒有歷史訂單</p>
              </div>
              : 
              <div>
                {
                  orders.map((order, index) => {
                    return (
                      <div className="mt-3 py-1 px-5 full-width shadow-sm" key={index}>
                        <div className="d-flex justify-content-between">
                          <span>訂單編號</span>
                          <span>{order._id}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>取餐時間</span>
                          <span>{order.pickupDate} {order.pickupTime}</span>
                        </div>
                        <hr/>
                        {
                          order.items.map((item, idx)=>{
                            return (
                              <div key={idx} className="row">
                                <div className="col-6 d-flex ">
                                  <span>{item.quantity}</span>
                                  <label>{item.name}</label>
                                </div>
                                <span className="col text-end">${item.quantity*item.price}</span>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
          }
          
        </div>
      }
    </div>
  )
}

export default History

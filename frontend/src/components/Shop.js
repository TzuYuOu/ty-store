import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Shop = ({cartItems, setCartItems, total}) => {

  const [items, setItems] = useState({
    hamburger : [
      {
        name: "厚牛芝加哥堡",
        price: 85,
        
      },
      {
        name: "起司鱈魚漢堡",
        price: 75,
         
      },
      {
        name: "紐奧良豬排堡",
        price: 65,
        category: "漢堡" 
      },
      {
        name: "海味蝦排米堡",
        price: 85,
         
      }
    ],
    eggpancake:[
      {
        name: "玉米蛋餅",
        price: 35
      },
      {
        name: "熱狗蛋餅",
        price: 35
      },
      {
        name: "火腿蛋餅",
        price: 35
      },
      {
        name: "鮪魚蛋餅",
        price: 35
      }
    ],
    special: [
      {
        name: "快樂兒童餐",
        price: 70,
      },
      {
        name: "法式燻雞義大利麵",
        price: 55
      },
      {
        name: "黑胡椒鐵板麵",
        price: 45
      }
    ],
    drink : [
      {
        name: "紅茶",
        price: 20
      },
      {
        name: "奶茶",
        price: 25
      },
      {
        name: "豆漿",
        price: 20
      }
    ],
    sandwich: [
      {
        name: "花生吐司",
        price: 20
      },
      {
        name: "巧克力吐司",
        price: 20
      }
    ],
    rice:[
      {
        name: "韓式辣雞飯",
        price: 150
      },
      {
        name: "紅醬番茄海鮮飯",
        price: 150
      }
    ] 
    
  })
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [value, setValue] = useState(1);

  const handleClick = (item) => {
    setSelectedItem(item);
    setValue(1);
    setShow(true);
  }
  
  const handlePlus = () => {
    setValue(value+1);
  }

  const handleMinus = () => {
    setValue(value-1);
  }

  const addToCart = (item) => {
    
    item.quantity = value;
    
    setCartItems([
      ...cartItems,
      item
    ]);
    setShow(false);
  }

  return (
    <div>
      <div className="container bg-white">
        <div className="row my-3">
          <Nav/>
          <span className="text-center">拉亞后里大圳店</span>
        </div>
        <div className="row justify-content-between">
          <span className="col-6 text-start">
            <i className="bi bi-geo"></i>
            台中市后里區大圳路427號
          </span>
          <a href="#store_info" className="col-6 text-end">門市資訊</a>
        </div>
        <hr/>
      </div>
      <div className="container scrollmenu">
        <a href="#cate1">漢堡</a>
        <a href="#cate2">蛋餅</a>
        <a href="#cate3">飲料</a>
        <a href="#cate4">特殊餐點類</a>
        <a href="#cate5">三明治/吐司</a>
        <a href="#cate6">義大利麵/燉飯</a>
      </div>
      
      <section id="cate1" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>漢堡</h3>
          </div>
          <div className="row g-3">
          {
            items.hamburger.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
          
          
        </div>
      </section>
      <section id="cate2" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>蛋餅</h3>
          </div>
          <div className="row g-3">
          {
            items.eggpancake.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
          
        </div>
      </section>
      <section id="cate3" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>飲料</h3>
          </div>
          <div className="row g-3">
          {
            items.drink.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
        </div>
      </section>
      <section id="cate4" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>特殊餐點類</h3>
          </div>
          <div className="row g-3">
          {
            items.drink.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
        </div>
      </section>
      <section id="cate5" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>三明治/吐司</h3>
          </div>
          <div className="row g-3">
          {
            items.sandwich.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
        </div>
      </section>
      <section id="cate6" className="my-3">
        <div className="container">
          <div className="text-center">
            <h3>義大利麵/燉飯</h3>
          </div>
          <div className="row g-3">
          {
            items.rice.map((item, index) => 
              <div key={index} className="col-xs-8 col-sm-6 col-md-4">
                <div onClick={() => handleClick(item)} className="card shadow-sm">
                  <div className="card-body text-start">
                    <span className="card-title">{item.name}</span>
                    <p className="card-text">${item.price}</p>
                  </div>
                </div>
              </div>  
            )
          }
          </div>
        </div>
      </section>
      { cartItems.length > 0 &&
        <div className="container bg-white">
          <div className="row ">
            <Link to="/cart" className="btn btn-success my-3 ">
              檢視購物車 ${total}
            </Link>
          </div>
        </div>
      }
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton> 
        </Modal.Header>
        <Modal.Body>
          <div className="my-3">
            <h3>{selectedItem.name}</h3>
            <span>${selectedItem.price}</span>
          </div>
          <div className="row g-3 justify-content-center">
            <button onClick={handleMinus} className="col-2 btn btn-warning" disabled={value <= 1} >
              <i className="bi bi-dash"></i>
            </button>
            <input className="col-4 text-center mx-2" type="number" value={value} onChange={() => setValue(value)}/>
            <button onClick={handlePlus} className="col-2 btn btn-warning ">
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </Modal.Body>

        <Modal.Footer>
          
          <button onClick={()=>addToCart(selectedItem)} type="button" className="btn btn-primary">
            加入購物車
          </button>
        </Modal.Footer>
      </Modal>
      
    </div>
  )
}

export default Shop

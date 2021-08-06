import React from 'react'
import { Modal } from 'react-bootstrap';

const Item = ({cartItems, setCartItems, selectedItem, show, setShow, value, setValue}) => {

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

export default Item

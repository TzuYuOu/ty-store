import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { isLogin, logout } from '../utils/auth';

const Nav = () => {
  
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
        <i className="bi bi-list"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        { !isLogin() && <Dropdown.Item href="/login">登入會員</Dropdown.Item>}
        { isLogin() && <Dropdown.Item href="/profile">會員資訊</Dropdown.Item>}
        { isLogin() && <Dropdown.Item href="/history">歷史訂單</Dropdown.Item>}
        { isLogin() && <Dropdown.Item href="/" onClick={logout}>登出會員</Dropdown.Item>}
        
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Nav

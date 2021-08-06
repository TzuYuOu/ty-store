import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 col-md-6 offset-md-3 ">
          <div className="bg-light mt-4 p-4">
            <h3 className="text-center">註冊</h3>
            <form className="row g-3" action="">
              <div className="form-group">
                <label htmlFor="email">信箱</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={email} 
                  onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">電話</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="phone"
                  value={phone}
                  onChange={(e)=> setPhone(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">密碼</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">確認密碼</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e)=> setConfirmPassword(e.target.value)}/>
              </div>

              <div className="">
                <button className="btn btn-primary login-btn" type="submit">註冊</button>
              </div>

              <div className="form-group">
                <Link to="/forgotPassword" className="btn btn-secondary btn-sm float-start">忘記密碼</Link>
                <Link to="/login" className="btn btn-success btn-sm float-end">已有帳號?</Link>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

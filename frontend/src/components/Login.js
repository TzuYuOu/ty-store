import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../services/auth-service';

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let userData = {
      email: email,
      password: password
    }

    AuthService.login(userData)
      .then(res => {
        alert('Login successfully')
        // console.log(res.data)
        localStorage.setItem('token', JSON.stringify(res.data.token))
        props.history.push('/')
        window.location.reload()
      })
      .catch(err => {
        alert('Login fail')
        console.log(err)
      })

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2 col-md-6 offset-md-3 ">
          <div className="bg-light mt-4 p-4">
            <form className="row g-3" >
              <h3 className="text-center">登入</h3>
              <div className="form-group">
                <label htmlFor="email">信箱</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="輸入信箱"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">密碼</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="輸入密碼"/>
              </div>

              <div className="">
                <button onClick={handleLogin} className="btn btn-primary login-btn" type="submit">登入</button>
              </div>

              <div className="form-group">
                <Link to="/forgotPassword" className="btn btn-secondary btn-sm float-start">忘記密碼</Link>
                <Link to="/register" className="btn btn-success btn-sm float-end">註冊</Link>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

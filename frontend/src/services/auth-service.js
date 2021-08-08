import axios from 'axios';

class AuthService {
  http = axios.create({
    baseURL: `/api/auth`,
    headers: {
      "Content-type": "application/json"
    }
  })

  register(data){
    return this.http.post('/register', data);
  }

  login(data){
    return this.http.post('/login', data);
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
 
  logout(){
    localStorage.removeItem("user");
  }

  getProfile(){
    const user = JSON.parse(localStorage.getItem("user"));
    return this.http.get('/profile', { headers: {'x-auth-token': user.token}});
    
  }

  forgotPassword(data){
    return this.http.post('/forgotPassword', data);
  }

  resetPassword(token, data){
    return this.http.put(`/passwordReset/${token}`, data);

  }
  
}

export default new AuthService();
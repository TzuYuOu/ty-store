import axios from 'axios';

class OrderService {

  http = axios.create({
    baseURL: `/api/order`,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })

  sendOrder(data){
    return this.http.post('/', data);
  }

  getOrder(){
    return this.http.get('/');
  }

}

export default new OrderService();

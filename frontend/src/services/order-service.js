import axios from 'axios';

class OrderService {

  http = axios.create({
    baseURL: `http://localhost:5000/api/order`,
    headers: {
      "Content-type": "application/json"
    }
  })

  sendOrder(data){
    return this.http.post('/', data);
  }

}

export default new OrderService();

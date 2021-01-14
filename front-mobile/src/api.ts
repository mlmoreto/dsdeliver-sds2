import axios from "axios";

const API_URL = 'https://marialaura-sds2.herokuapp.com'; // pode usar da heroku ou o ip q eh gerado pelo expo//'http://192.168.2.183:8080';  //https://marialaura-sds2.herokuapp.com

export function fetchOrders(){
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}
import axios from 'axios';
const baseURL = 'http://backoffice.g01.batoilogic.es/api';
//const baseURL = 'http://localhost:3000';

const products = {
    getAllByOrder: (id) => axios.get(`${baseURL}/products?order=${id}`),
    getAll: () => axios.get(`${baseURL}/products`),
    getAllActive: () => axios.get(`${baseURL}/products?active=1`),
    create: (item) => axios.post(`${baseURL}/products`, item),
    modify: (item) => axios.put(`${baseURL}/products/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/products/${id}`),
};
const orders = {
    getAll: () => axios.get(`${baseURL}/orders`),
    create: (item) => axios.post(`${baseURL}/orders`, item),
    modify: (item) => axios.put(`${baseURL}/orders/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/orders/${id}`),
};

export default {
    products,
    orders
};
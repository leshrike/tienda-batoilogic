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
const users = {
    getByToken: (token) => axios.get(`${baseURL}/Users?token=${token}`),
    getAll: () => axios.get(`${baseURL}/Users`),
    create: (item) => axios.post(`${baseURL}/Users`, item),
    modify: (item) => axios.put(`${baseURL}/Users/${item.id}`, item),
    delete: (id) => axios.delete(`${baseURL}/Users/${id}`),
    login: (item) => new Promise((resolv, reject) => {
        axios.post(`${baseURL}/login`,item)
            .then(response => {
                if (response.data) {
                    resolv(response.data.token)
                }
            })
            .catch(error => reject(error))
    }),
};

export default {
    products,
    orders,
    users
};
import axios from 'axios';
import { BDD_URL } from '../../constants';
const headers = {
  'Content-Type': 'application/json',
};

export default {
  login: function (send) {
    return axios.post(`${BDD_URL}/login`, send, {
      headers: headers,
    });
  },
  signup: function (send) {
    return axios.post(`${BDD_URL}/signup`, send, { headers: headers });
  },

  isAuth: function () {
    return localStorage.getItem('token') !== null;
  },
  logout: function () {
    localStorage.clear();
  },
};

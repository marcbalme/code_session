import axios from 'axios';
const headers = {
  'Content-Type': 'application/json',
};
const burl = 'http://localhost:8800';

export default {
  login: function (email, password) {
    return axios.post(
      `${burl}/login`,
      {
        email,
        password,
      },
      {
        headers: headers,
      }
    );
  },
  signup: function (send) {
    return axios.post(`${burl}/signup`, send, { headers: headers });
  },

  isAuth: function () {
    return localStorage.getItem('token') !== null;
  },
  logout: function () {
    localStorage.clear();
  },
  // createStudent: function (send) {
  //   return axios.post(`${burl}/new_student`, send, {
  //     headers: headers,
  //   });
  // },
};

import axios from 'axios';
import { BDD_URL } from '../../constants';
const headers = {
  'Content-Type': 'application/json',
};

export default {
  createStudent: function (send) {
    return axios.post(`${BDD_URL}/new_student`, send, {
      headers: headers,
    });
  },
};

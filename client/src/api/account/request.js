import index from './index';

const api_newUser = async (value) => {
  try {
    const { data } = await index.signup(value);
    localStorage.setItem('token', data.token);
    window.location = '/dashboard';
  } catch (error) {
    console.error(error);
  }
};
const api_newLog = async (value) => {
  try {
    const { data } = await index.login(value);
    localStorage.setItem('token', data.token);
    window.location = '/dashboard';
  } catch (error) {
    console.error(error);
  }
};

export { api_newUser, api_newLog };

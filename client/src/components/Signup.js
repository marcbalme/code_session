import React, { useState } from 'react';
import API from '../utils/API';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const send = async () => {
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.signup({ email, password });
      localStorage.setItem('token', data.token);
      window.location = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Login">
      <form>
        <label>
          Email
          <input
            id="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <label>
          confirmPassWord
          <input
            id="cpassword"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            type="password"
          />
        </label>
        <button onClick={() => send()} type="submit">
          Inscription
        </button>
      </form>
    </div>
  );
};

export default Signup;

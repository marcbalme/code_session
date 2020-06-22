import React, { useState } from 'react';
import { api_newUser } from '../api/account/request';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const handleSubmit = () => {
    const value = {
      email,
      password,
    };
    if (!email || email.length === 0) return;
    if (!password || password.length === 0 || password !== cpassword) return;
    else return api_newUser(value);
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
        <button onClick={() => handleSubmit()} type="submit">
          Inscription
        </button>
      </form>
    </div>
  );
};

export default Signup;

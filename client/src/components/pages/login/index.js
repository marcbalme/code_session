import React, { useState } from 'react';
import API from '../../../utils/API';
import Button from '../../button';
import Input from '../../form/input';
import { common, login } from '../../../translations';
import { ICON_LOGIN } from '../../../constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const send = async () => {
    if (!email || email.length === 0) {
      return;
    }
    if (!password || password.length === 0) {
      return;
    }
    try {
      const { data } = await API.login(email, password);
      localStorage.setItem('token', data.token);
      window.location = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <div className="login">
        <div className="login-header column">
          <h3>{login.title}</h3>
        </div>
        <div className="login-container row">
          <div className="column small-12 medium-6">
            <Input
              label={common.email}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={login.placeholder.email}
            />
          </div>
          <div className="column small-12 medium-6">
            <Input
              id="password"
              label={login.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={login.placeholder.password}
            />
          </div>
          <div className="column small-12 medium-4 large-3 onRight">
            <Button
              label={login.connect}
              onClick={() => send()}
              type="submit"
              icon={ICON_LOGIN}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;

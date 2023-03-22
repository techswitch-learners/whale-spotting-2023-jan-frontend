import "./Login.scss";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="input-field">
          Username
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label className="input-field">
          Password
          <div className="password-input">
          <input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className="password-toggle" type="button" onClick={() => setShowPassword(!showPassword)}>👁</button>
          </div>
        </label>
        <button className= "login-button" type="submit">Login</button>
      </form>
	  <Link to="/create-account">Create account</Link>
    </div>
  );
}

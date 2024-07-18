import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after login
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS for styling
import './Login.css'; // Custom CSS for additional styling
import Googlebutton from './Googlebutton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      setSuccess('');
      return;
    }

    // Mock authentication - replace with actual login logic
    if (email === 'aalok@email.com' && password === 'password') {
      setSuccess('Login successful!');
      setError('');
      navigate('/cart');
    } else {
      setError('Invalid email or password.');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card card p-4 shadow-lg">
        <h1 className="my-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type='email'
              placeholder='Enter email'
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder='Enter password'
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <br/>
          <Googlebutton /> 
        </form>
      </div>
    </div>
  );
};

export default Login;

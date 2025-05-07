import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('https://dummyjson.com/auth/login', {
        username: form.email,
        password: form.password,
        expiresInMins: 30,
      });

      setToken(res.data.token);
      console.log('Login Success:', res.data);

      navigate('/products');
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 px-4">
      <div className="w-1/2 md:w-1/3 bg-white shadow-xl rounded-3xl p-10 border border-pink-200">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-pink-600">StyleShop 👗</h1>
          <p className="text-gray-500 mt-1 text-sm">Welcome back, fashionista!</p>
        </div>

        <form className="space-y-5 flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="emilys"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
            />
          </div>

          <div className="w-1/2 flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="text-pink-600 hover:underline">Forgot?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-1/2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{' '}
            <a href="#" className="text-pink-600 hover:underline font-medium">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

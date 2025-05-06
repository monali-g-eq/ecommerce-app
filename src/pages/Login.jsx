
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from "../redux/userSlice";


import { useState } from 'react';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setApiError('');
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 30,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        dispatch(setUser({ user: result, token: result.token }));
        navigate('/products');
      } else {
        setApiError(result.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setApiError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-8 border border-gray-300">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Login to Your Account</h2>
  
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              {...register('username', { required: 'Username is required' })}
              placeholder="e.g., kminchelle"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-2">{errors.username.message}</p>}
          </div>
  
          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Your password"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
          </div>
  
          {/* API Error Message */}
          {apiError && <p className="text-red-600 text-sm text-center">{apiError}</p>}
  
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md transition duration-300 ${loading ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'}`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
  
        
      </div>
    </div>
  );
  
  
}



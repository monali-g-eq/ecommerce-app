import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });

      const userData = response.data;
      dispatch(setUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root {
          height: 100%;
          width: 100%;
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-card {
          background: white;
          padding: 32px 28px;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
          max-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .login-title {
          text-align: center;
          margin-bottom: 24px;
          font-size: 28px;
          font-weight: 700;
          color: #333;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        label {
          font-weight: 600;
          color: #555;
          margin-bottom: 6px;
          display: block;
          font-size: 14px;
        }
        input[type="username"],
        input[type="password"] {
          padding: 12px 14px;
          font-size: 16px;
          border-radius: 8px;
          border: 1.5px solid #ddd;
          transition: border-color 0.3s ease;
          width: 100%;
        }
        input[type="username"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: #6c63ff;
          box-shadow: 0 0 6px #6c63ff66;
        }
        .error-message {
          color: #ff4d4f;
          font-weight: 600;
          text-align: center;
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: #666;
        }
        .form-options label {
          display: flex;
          align-items: center;
          gap: 6px;
          user-select: none;
          cursor: pointer;
        }
        .form-options input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .forgot-link {
          color: #6c63ff;
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .forgot-link:hover {
          color: #5048e5;
          text-decoration: underline;
        }
        button.login-button {
          margin-top: 12px;
          padding: 14px 0;
          background-color: #6c63ff;
          border: none;
          color: white;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 12px #6c63ff88;
          user-select: none;
        }
        button.login-button:hover {
          background-color: #5048e5;
          box-shadow: 0 6px 16px #5048e5cc;
        }
        button[disabled] {
          background-color: #ccc;
          cursor: not-allowed;
          box-shadow: none;
        }
        @media (max-width: 420px) {
          .login-card {
            padding: 24px 20px;
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
          }
          .login-title {
            font-size: 24px;
            margin-bottom: 20px;
          }
          button.login-button {
            font-size: 16px;
            padding: 12px 0;
          }
        }
      `}</style>
      <div className="login-card" role="main" aria-label="Login form">
        <h2 className="login-title">Welcome Back, Fashionista! 👗</h2>
        <form onSubmit={handleLogin} noValidate aria-busy={loading}>
          <div>
            <label htmlFor="username">username</label>
            <input
              id="username"
              type="username"
              placeholder="you@example.com"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="error-message" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          <div className="form-options">
            <label htmlFor="remember">
              <input type="checkbox" id="remember" />
              Remember me
            </label>
            <a className="forgot-link" href="/forgot-password" tabIndex={0}>
              Forgot?
            </a>
          </div>
          <button
            type="submit"
            className="login-button"
            aria-label="Login to your account"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

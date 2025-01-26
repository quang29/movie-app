import React from 'react';
import './LoginPage.css'; // File CSS riêng để tùy chỉnh

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Sign in</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign in</button>
        </form>
        
        {/* Nút Quên mật khẩu */}
        <div className="text-center mt-3">
          <a href="/forgot-password" className="text-decoration-none">Forgot password?</a>
        </div>
        
        {/* Nút Đăng ký */}
        <div className="text-center mt-3">
          <span>New to StreamVibe? </span>
          <a href="/register" className="text-decoration-none">Sign up now.</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

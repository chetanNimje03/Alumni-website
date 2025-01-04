import React, { useState } from "react";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Handle Admin Login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Admin Login:", { email, password });
    alert("Admin Login Successful!");
  };

  // Handle Forgot Password Submission
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot Password Email:", forgotEmail);

    // Simulate an API call to send the reset link
    setTimeout(() => {
      alert(`A password reset link has been sent to ${forgotEmail}`);
      setShowForgotPassword(false);
      setForgotEmail(""); // Clear the email field
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setShowForgotPassword(true)}
          >
            Forgot Password?
          </button>
        </div>
      </form>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Forgot Password</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowForgotPassword(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleForgotPassword}>
                  <div className="mb-3">
                    <label htmlFor="forgotEmail" className="form-label">
                      Enter your registered email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="forgotEmail"
                      placeholder="Enter your email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Reset Link
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

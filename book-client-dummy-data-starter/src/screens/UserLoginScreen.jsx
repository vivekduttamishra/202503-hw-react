import { useState } from "react";
import { Link } from "react-router-dom";

const UserLoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "User", // Default role
  });

  const roles = ["User", "Admin"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    // Add API call or form submission logic here
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">User Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Role</label>
            <select className="form-select" name="role" value={formData.role} onChange={handleChange}>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <div className="text-center mt-3">
          <p>
            Not a member? <Link to="/user/register">Register</Link> now!
          </p>
          <p>
            <Link to="/user/forgot-password">Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLoginScreen;

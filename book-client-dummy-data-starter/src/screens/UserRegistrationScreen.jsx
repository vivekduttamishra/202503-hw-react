import { useState } from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    biography: "",
    roles: [],
  });

  const roleOptions = ["Reader", "Author", "Moderator"];
  const defaultPhoto = "https://avatars.githubusercontent.com/u/35440139?v=4";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        roles: checked
          ? [...prevData.roles, value]
          : prevData.roles.filter((role) => role !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Register</h2>
        <div className="mb-3 text-center">
            <img
              src={formData.photo || defaultPhoto}
              alt="Profile Preview"
              className="img-thumbnail"
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
              onError={(e) => (e.target.src = defaultPhoto)}
            />
          </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

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
            <label className="form-label">Photo URL</label>
            <input
              type="url"
              className="form-control"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Enter photo URL"
            />
          </div>

         
          <div className="mb-3">
            <label className="form-label">Biography</label>
            <textarea
              className="form-control"
              name="biography"
              value={formData.biography}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Desired Roles</label>
            <div>
              {roleOptions.map((role, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="roles"
                    value={role}
                    checked={formData.roles.includes(role)}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{role}</label>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <div className="text-center mt-3">
          <p>
            Already have an account? <Link to="/user/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;

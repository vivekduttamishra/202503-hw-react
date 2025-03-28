
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook, FaUserEdit, FaUsers, FaStar, FaPlusCircle, FaUserPlus } from "react-icons/fa";
import Authorize from "../components/Authorize"; // Import role-based component

const user={
    name:"Vivek Dutta Mishra",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    email:"user@email.com",
    password:"",
    roles:["admin"]
}
export default function UserDashboard() {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
      name: user.name,
      email: user.email,
      password: "",
      photo: user.photo || "https://via.placeholder.com/80",
    });
  
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Updated User Info:", formData);
      setEditMode(false);
    };
  
    return (
      <div className="container py-4">
        <h1>Welcome, {user.name}!</h1>
  
        {/* Profile Section */}
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <img src={formData.photo} alt="User" className="rounded-circle me-3" width="80" height="80" />
            <div>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </div>
          </div>
          <button className="btn btn-outline-primary mt-3" onClick={() => setEditMode(true)}>
            <FaUserEdit /> Edit Profile
          </button>
        </div>
  
        {/* Edit Profile Modal */}
        {editMode && (
          <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
              <div className="modal-content p-3">
                <h3>Edit Profile</h3>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} />
                  <input type="email" name="email" className="form-control mb-2" placeholder="Email" value={formData.email} onChange={handleChange} />
                  <input type="password" name="password" className="form-control mb-2" placeholder="New Password" value={formData.password} onChange={handleChange} />
                  <input type="text" name="photo" className="form-control mb-2" placeholder="Photo URL" value={formData.photo} onChange={handleChange} />
                  <button type="submit" className="btn btn-success me-2">Save</button>
                  <button type="button" className="btn btn-danger" onClick={() => setEditMode(false)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        )}
  
        {/* Dashboard Links */}
        <div className="mt-4">
          {/* Favorites Link */}
          <Link to="/user/favorites" className="btn btn-warning me-2">
            <FaStar /> My Favorites
          </Link>
  
          {/* Conditionally render Add Book & Add Author if user is a moderator or admin */}
          <Authorize userRoles={user.roles} allowedRoles={["admin", "moderator"]}>
            <Link to="/books/new" className="btn btn-primary me-2">
              <FaBook /> Add Book
            </Link>
            <Link to="/authors/new" className="btn btn-success me-2">
              <FaUserPlus /> Add Author
            </Link>
          </Authorize>
  
          {/* Conditionally render User Management if user is an admin */}
          <Authorize userRoles={user.roles} allowedRoles={["admin"]}>
            <Link to="/users/manage" className="btn btn-danger">
              <FaUsers /> User Management
            </Link>
          </Authorize>
        </div>
      </div>
    );
  }

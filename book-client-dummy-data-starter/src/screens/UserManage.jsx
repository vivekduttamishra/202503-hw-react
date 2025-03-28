import React, { useState } from "react";
import { FaUserMinus, FaToggleOn, FaToggleOff, FaPlus, FaTrash } from "react-icons/fa";

const sampleUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", roles: ["user"], active: true },
  { id: 2, name: "Bob Smith", email: "bob@email.com", roles: ["moderator"], active: true },
  { id: 3, name: "Charlie Brown", email: "charlie@email.com", roles: ["admin"], active: false },
];

export default function UserManage() {
  const [users, setUsers] = useState(sampleUsers);
  const [editingRoles, setEditingRoles] = useState(null);
  const [newRole, setNewRole] = useState("");

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => user.id === userId ? { ...user, active: !user.active } : user));
  };

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const removeRole = (userId, role) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, roles: user.roles.filter(r => r !== role) } : user
    ));
  };

  const addRole = (userId) => {
    if (!newRole.trim()) return;
    setUsers(users.map(user =>
      user.id === userId ? { ...user, roles: [...new Set([...user.roles, newRole.trim()])] } : user
    ));
    setNewRole("");
    setEditingRoles(null);
  };

  return (
    <div className="container py-4">
      <h1>User Management</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.roles.map(role => (
                  <span key={role} className="badge bg-primary me-1">
                    {role} <FaTrash className="ms-1" style={{ cursor: "pointer" }} onClick={() => removeRole(user.id, role)} />
                  </span>
                ))}
                {editingRoles === user.id ? (
                  <div className="mt-1">
                    <input
                      type="text"
                      placeholder="Add Role"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="form-control form-control-sm d-inline w-50 me-2"
                    />
                    <button className="btn btn-success btn-sm" onClick={() => addRole(user.id)}>
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-secondary btn-sm mt-1" onClick={() => setEditingRoles(user.id)}>
                    + Add Role
                  </button>
                )}
              </td>
              <td>
                {user.active ? (
                  <FaToggleOn className="text-success fs-4" style={{ cursor: "pointer" }} onClick={() => toggleUserStatus(user.id)} />
                ) : (
                  <FaToggleOff className="text-danger fs-4" style={{ cursor: "pointer" }} onClick={() => toggleUserStatus(user.id)} />
                )}
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeUser(user.id)}>
                  <FaUserMinus /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

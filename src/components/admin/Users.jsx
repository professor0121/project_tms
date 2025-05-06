import { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    role: "customer",
    bio: "",
    image: "",
  });

  // Fetch users from API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/admin/userControll");
        setUsers(response.data.users); // Assuming the response structure has a 'users' field
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  // Handle updating a user
  const handleEditClick = (user) => {
    setEditingUser(user);
    setUpdatedUser({
      name: user.name,
      email: user.email,
      role: user.role,
      bio: user.bio,
      image: user.image,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/admin/userControll?id=${editingUser._id}`,
        updatedUser
      );
      alert("User updated successfully!");
      // Refresh the user list after updating
      const updatedUsers = users.map((user) =>
        user._id === editingUser._id ? response.data.user : user
      );
      setUsers(updatedUsers);
      setEditingUser(null); // Close the edit form
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user.");
    }
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <table className="min-w-full mt-4 border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Bio</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b">
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.bio}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded"
                  onClick={() => handleEditClick(user)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form onSubmit={handleUpdateSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Role</label>
              <select
                name="role"
                value={updatedUser.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="customer">Customer</option>
                <option value="vender">Vender</option>
                <option value="localGuid">Local Guide</option>
                <option value="planner">Planner</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Bio</label>
              <input
                type="text"
                name="bio"
                value={updatedUser.bio}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Image URL</label>
              <input
                type="text"
                name="image"
                value={updatedUser.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserTable;

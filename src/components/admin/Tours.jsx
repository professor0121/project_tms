'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tours = () => {
  const adminId=localStorage.getItem('adminId');
  const [tours, setTours] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: '',
    duration: '',
    image: '',
    createdBy: '',
    availableDates: '',
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTours(); 
  }, []);

  const fetchTours = async () => {
    try {
      const res = await axios.get('/api/planner/tour');
      setTours(res.data.tours);
    } catch (err) {
      console.error('❌ Fetch tours failed:', err);
    }
  };
  console.log(tours); 

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/planner/tour', formData);
      fetchTours();
      setFormData({ title: '', description: '', location: '', price: '', duration: '', image: '', createdBy: '', availableDates: '' });
    } catch (err) {
      console.error('❌ Create tour failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/planner/tour?id=${id}`);
      fetchTours();
    } catch (err) {
      console.error('❌ Delete failed:', err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/api/planner/tour?id=${id}`, formData);
      setEditId(null);
      fetchTours();
      setFormData({ title: '', description: '', location: '', price: '', duration: '', image: '', createdBy: '', availableDates: '' });
    } catch (err) {
      console.error('❌ Update failed:', err);
    }
  };

  const handleEdit = (tour) => {
    setEditId(tour._id);
    setFormData({
      title: tour.title,
      description: tour.description,
      location: tour.location,
      price: tour.price,
      duration: tour.duration,
      image: tour.image || '',
      createdBy: tour.createdBy?._id || '',
      availableDates: tour.availableDates || '',
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Tours</h2>

      {/* Add / Update Form */}
      <form onSubmit={editId ? () => handleUpdate(editId) : handleCreate} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 border" required />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border" required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="p-2 border" required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} className="p-2 border" required />
        <input name="duration" placeholder="Duration" value={formData.duration} onChange={handleChange} className="p-2 border" required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="p-2 border" />
        <input name="createdBy" placeholder="Created By (User ID)" value={formData.createdBy}  className="p-2 border" required />
        <input name="availableDates" placeholder="Available Dates (comma-separated)" value={formData.availableDates} onChange={handleChange} className="p-2 border" />
        <button type="submit" className="col-span-2 bg-blue-600 text-white p-2 rounded">
          {editId ? 'Update Tour' : 'Create Tour'}
        </button>
      </form>

      {/* Tour Table */}
      <table className="min-w-full bg-white border text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Created By</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour._id}>
              <td className="p-2 border">{tour.title}</td>
              <td className="p-2 border">{tour.location}</td>
              <td className="p-2 border">{tour.price}</td>
              <td className="p-2 border">{tour.duration}</td>
              <td className="p-2 border">{tour.createdBy?.name || 'N/A'}</td>
              <td className="p-2 border flex gap-2">
                <button className="text-blue-600" onClick={() => handleEdit(tour)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(tour._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tours;

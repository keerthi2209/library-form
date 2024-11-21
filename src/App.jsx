// App.jsx

import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    registerNo: '',
    dateOfBirth: '',
    biography: ''
  });
  const [isEditable, setIsEditable] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleDelete = () => {
    setFormData({
      name: '',
      registerNo: '',
      dateOfBirth: '',
      biography: ''
    });
    setIsEditable(true);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>BARATHITHASAN LIBRARY </h1>
        <h3>DEVAKOTTAI-630 302</h3>
        <form>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleInputChange}
            className="input-field"
            disabled={!isEditable}
          />
          <input
            type="text"
            name="registerNo"
            value={formData.registerNo}
            placeholder="Register No"
            onChange={handleInputChange}
            className="input-field"
            disabled={!isEditable}
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="input-field"
            disabled={!isEditable}
          />
          <textarea
            name="biography"
            value={formData.biography}
            placeholder="Biography"
            onChange={handleInputChange}
            className="input-field"
            rows="4"
            disabled={!isEditable}
          ></textarea>

          <div>
            <button
              type="button"
              className="save"
              onClick={handleSave}
              disabled={!isEditable}
            >
              Save
            </button>
            <button
              type="button"
              className="edit"
              onClick={handleEdit}
              disabled={isEditable}
            >
              Edit
            </button>
            <button
              type="button"
              className="delete"
              onClick={handleDelete}
              disabled={isEditable}
            >
              Delete
            </button>
          </div>
        </form>

        <div>
          <h4>Form Data:</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Register No:</strong> {formData.registerNo}</p>
          <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
          <p><strong>Biography:</strong> {formData.biography}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

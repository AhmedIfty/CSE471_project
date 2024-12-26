import React, { useState } from "react";
import "./gymModal.scss";

const GymModal = ({ isOpen, onClose, onSubmit }) => {
  const [gymName, setGymName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { gymName, location, description };
    onSubmit(formData); // Pass data to the parent
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Do not render the modal if not open

  return (
    <div className="gymModalOverlay">
      <div className="gymModalContent">
        <h2>Add New Gym</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label>Gym Name</label>
            <input
              type="text"
              value={gymName}
              onChange={(e) => setGymName(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="buttonGroup">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GymModal;

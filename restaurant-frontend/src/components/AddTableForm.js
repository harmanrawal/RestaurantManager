import React, { useState } from "react";
import { addTable } from "../services/api";

const AddTableForm = ({ restaurantId, onTableAdded }) => {
  const [quantity, setQuantity] = useState("");
  const [maxCapacity, setMaxCapacity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTable({
        restaurantId,
        quantity: parseInt(quantity),
        maxCapacity: parseInt(maxCapacity),
      });

      // Reset form fields after submission
      setQuantity("");
      setMaxCapacity("");
      onTableAdded(); // Refresh the table list
    } catch (error) {
      console.error("Error adding table:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Number of Tables:</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <label>Maximum Capacity per Table:</label>
      <input
        type="number"
        value={maxCapacity}
        onChange={(e) => setMaxCapacity(e.target.value)}
        required
      />

      <button type="submit">Add Tables</button>
    </form>
  );
};

export default AddTableForm;
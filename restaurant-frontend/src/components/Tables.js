import React, { useEffect, useState } from "react";
import { getTables } from "../services/api";

const Tables = ({ restaurantId }) => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await getTables(restaurantId);
      setTables(response.data);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  return (
    <div>
      <h2>Restaurant Table View</h2>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>Table {table.table_id} : {table.capacity} Seats : {table.status.toLowerCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tables;

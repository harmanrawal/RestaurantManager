import React, { useEffect, useState } from "react";
import { getMenu } from "../services/api";

const Menu = ({ restaurantId }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await getMenu(restaurantId);
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div>
      <h2>Menu Items</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

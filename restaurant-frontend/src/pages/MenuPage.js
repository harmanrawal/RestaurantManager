import React, { useState } from "react";
import Menu from "../components/Menu";
import AddMenuItemForm from "../components/AddMenuItemForm";
import Navbar from "../components/Navbar";

const MenuPage = ({ restaurantId }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Manage Menu</h1>
      <AddMenuItemForm
        restaurantId={restaurantId}
        onMenuItemAdded={() => setRefresh(!refresh)}
      />
      <Menu restaurantId={restaurantId} key={refresh} />
    </div>
  );
};

export default MenuPage;

import React, { useState } from "react";
import Tables from "../components/Tables";
import AddTableForm from "../components/AddTableForm";
import Navbar from "../components/Navbar";

const TablesPage = ({ restaurantId }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>Manage Tables</h1>
      <AddTableForm
        restaurantId={restaurantId}
        onTableAdded={() => setRefresh(!refresh)}
      />
      <Tables restaurantId={restaurantId} key={refresh} />
    </div>
  );
};

export default TablesPage;

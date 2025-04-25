import React, { useState } from "react";
import Tables from "../components/Tables";
import Navbar from "../components/Navbar";

const TableViewPage = ({ restaurantId }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <Navbar />
      <h1>View Tables</h1>
      <Tables restaurantId={restaurantId} key={refresh} />
    </div>
  );
};

export default TableViewPage;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TablesPage from "./pages/TablesPage";
import TableViewPage from "./pages/TableViewPage";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tables" element={<TablesPage restaurantId={1} />} />
        <Route path="/tableView" element={<TableViewPage restaurantId={1} />} />
        <Route path="/menu" element={<MenuPage restaurantId={1} />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid routes */}
      </Routes>
    </Router>
  );
}

export default App;
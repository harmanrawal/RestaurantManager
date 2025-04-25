import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>Welcome to the Restaurant Manager System</h1>
        <p>Manage your restaurant’s tables and menu items efficiently.</p>
        
        <div style={styles.buttons}>
          <Link to="/tables" style={styles.button}>Manage Tables</Link>
          <Link to="/tableView" style={styles.button}>View Tables</Link>
          <Link to="/menu" style={styles.button}>Manage Menu</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  buttons: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "18px",
  },
};

export default Dashboard;
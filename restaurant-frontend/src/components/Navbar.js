import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2> <Link to="/" style={styles.link}>Restaurant Manager</Link></h2>
      <div>
        <Link to="/tables" style={styles.link}>Tables</Link>
        <Link to="/menu" style={styles.link}>Menu</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  link: {
    color: "white",
    margin: "0 10px",
    textDecoration: "none",
  },
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../classes.css";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  return (
    <NavbarBootstrap className="navbar-main" sticky="top">
      <h2>fin_App</h2>
      <Nav className="mr-auto">
        <Button variant="flat">Calc</Button>
        <Button variant="flat">Stat</Button>
        <Button variant="flat">Financial</Button>
        <Button variant="flat">Rate</Button>
        <Button variant="flat">Reset</Button>
      </Nav>
      <hr />
    </NavbarBootstrap>
  );
}

export default Navbar;

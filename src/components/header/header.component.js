import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => (
  <div className="container">
    <div className="logo-container">
      <Link to="/">
        <div className="text-title" data-testid="title">
          Flickr Gallery
        </div>
      </Link>
    </div>
  </div>
);

export default Header;

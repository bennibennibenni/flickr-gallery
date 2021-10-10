import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => (
    <div className="header-wrapper">
      <Link to="/">
        <div className="text-title" data-testid="title">
          Flickr Gallery
        </div>
      </Link>
    </div>
);

export default Header;

import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>{props.logoName}</h1>
        </a>
      </div>
    </nav>
  );
}
Navbar.defaultProps={
    aboutText:"about text here",
    homeText:"home text here"
}
import React from "react";

const Navbar = props => {
  return (

    <nav class="container navbar navbar-expand-lg navbar-light sticky-top shadow p-2 bg-light wow fadeIn">

      <div class="container">
        <a class="navbar-brand" href="https://ajavonweb.ca/">
          <img src="./icon.png" alt="logo" style={{ width: "30px" }} />
          <h2 class="d-inline"><small class="text-sm-left font-weight-bold mx-1">AJ-Web</small></h2>
        </a>

        <div class="d-flex justify-content-end">
          <h3 class="d-inline"><small class="text-sm-left text-info font-weight-bold mx-1">Demo-RestApi</small></h3>
        </div>

      </div>

    </nav>

  );
};

export default Navbar;

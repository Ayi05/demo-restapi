import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button, Form, Input } from 'reactstrap';

const Topbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="mb-5" color="dark" dark expand="md">

      <div className="container">

        <NavbarBrand href="/">
          <img src="./icon.png" alt="logo" style={{ width: "30px" }} />
          <h3 className="d-inline ml-2">
            <small className="font-weight-bold">
              Demo-RestApi
            </small>
          </h3>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar></Nav>

          <Form className="form-inline">
            <div className="input-group mt-3 mt-md-0">

              <Input
                size="sm"
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Chercher"
              />

              <div className="input-group-append">
                <Button
                  size="sm"
                  type="submit"
                  className="btn btn-secondary">
                  <i class="fa fa-search"></i>
                </Button>
              </div>

            </div>
          </Form>

          <Button className="mt-3 mt-md-0 ml-md-3" color="success" size="sm">Connexion</Button>{' '}

        </Collapse>

      </div>

    </Navbar>
  );
}

export default Topbar;

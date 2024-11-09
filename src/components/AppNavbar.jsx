import React from "react";
import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "./Cart"; // Assuming you have Cart component imported
import { useSelector } from "react-redux";

const AppNavbar = ({ toggleForm, showForm }) => {
  const { totalItemCount } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
            The Generics
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-success"
            onClick={toggleForm}
            aria-label={showForm ? "Close Cart" : "Open Cart"}
          >
            Cart
            {totalItemCount > 0 && (
              <Badge bg="light" text="dark" className="ms-2">
                {totalItemCount}
              </Badge>
            )}
          </Button>
        </Container>
      </Navbar>

      {/* Conditional rendering for the Cart */}
      {showForm && <Cart onClose={toggleForm} />}
    </>
  );
};

export default AppNavbar;

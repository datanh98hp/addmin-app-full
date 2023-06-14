import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/features/counter/counterSlice";



export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // 
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()
  console.log(count)
  return (
    <>
      <Container className="mb-2 bg-primary-subtle">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-md-none">
            <Button variant="" onClick={handleShow}>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 -2 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m2.61 0h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
                <path d="m2.61 9.39h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
                <path d="m2.61 18.781h22.431c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-22.431c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z" />
              </svg>
            </Button>
          </div>
          <div className="d-none d-md-flex">
            <h3>LOGO</h3>
            <button onClick={()=>dispatch(increment())}>{count}</button>
          </div>
          <div className="">
            <Nav className="me-auto">
            
              <NavDropdown title="Account" id="basic-nav-dropdown" className="text-white">
                <NavDropdown.Item href="/" className="">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </div>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item >Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

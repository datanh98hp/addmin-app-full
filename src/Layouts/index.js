import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Header from "../Components/Header";
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { active } from "../redux/features/link-active/link-active";

export default function Layout({children,title}) {
  const path = useLocation();
 

  // const activeLink = useSelector((state)=>state.activeLink.path);
  // const dispath    = useDispatch();
  // useEffect(()=>{
  //   activeLinkHandle();
  // },[]);

  // const activeLinkHandle = ()=>{
  //   dispath(active('wallpapers'))
  // }

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col md={3} className="d-none d-md-grid">
          <ListGroup variant="flush">
            {/* <Link to={`/wallpapers`} className={`list-group-item ${(activeLink==='wallpapers') ? 'text-emphasis-secondary': ''}`}>Wallpapers</Link> */}
            <Link to={`/categories`} className="list-group-item">Categories</Link>
            <Link to={`/user-access`} className="list-group-item">User</Link>
            <Link to={`/session-anonynmous`} className="list-group-item">Anonymous account</Link>
            <Link to={`/contact-manage`} className="list-group-item">Contact manage</Link>
            <Link to={`/policies-manage`} className="list-group-item">Policies manage</Link>
          </ListGroup>
        </Col>
        <Col md={9}>
            <Card border="light">
              <Card.Header>{path.pathname} </Card.Header>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {children}
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

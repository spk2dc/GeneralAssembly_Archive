import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Dog HW</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/user/register'>REGISTER</Nav.Link>
        <Nav.Link href='/user/login'>LOGIN</Nav.Link>
        <Nav.Link href='/dog'>DOGS</Nav.Link>
      </Nav>
    </Navbar>
  );
}

import React from 'react'
import { LuBell } from "react-icons/lu";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (

  
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand href="#home" className='text-primary'><img src='./src/assets/logo-img.png'></img> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className="">
           <Nav.Link href="#home" className='navItems'>Explore</Nav.Link>
           <Nav.Link href="#features" className='navItems'>Search</Nav.Link>
           <Nav.Link href="#pricing" className='navItems'>Hotels</Nav.Link>
           <Nav.Link href="#pricing" className='navItems'>Offers</Nav.Link>
           <Nav.Link href="#pricing" className='fs-4  p-0 navItems'><LuBell /></Nav.Link>
           <Nav.Link href="#pricing" className='navItems'><img height={"30px"} className=' rounded-circle' src='https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?w=221&h=183&c=7&r=0&o=5&pid=1.7'></img></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  //   <Navbar bg="light" className='' expand='lg' data-bs-theme="light">
  //   <Container>
  //     <Nav className=" me-auto">
  //       <Nav.Link href="#home" className='navItems'>Explore</Nav.Link>
  //       <Nav.Link href="#features" className='navItems'>Search</Nav.Link>
  //       <Nav.Link href="#pricing" className='navItems'>Hotels</Nav.Link>
  //       <Nav.Link href="#pricing" className='navItems'>Offers</Nav.Link>
  //       <Nav.Link href="#pricing" className='fs-4  p-0 navItems'><LuBell /></Nav.Link>
  //     </Nav>
  //   </Container>
  // </Navbar>


  )
}

export default NavBar
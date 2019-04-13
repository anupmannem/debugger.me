import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Image, Container } from 'react-bootstrap'
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Container>
      <Navbar bg='light' expand='lg'>
        {/* Image and Home page link */}
        <Navbar.Brand>
          <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded />
          <Link to='/'>Debugger</Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* collapse menu */}
        <Navbar.Collapse className="justify-content-end">
          <Link to='/'>
            <NavItem>Home</NavItem>
          </Link>  
          <Link to='/about'>
            <NavItem>About</NavItem>
          </Link>
          <Link to='/news'>
            <NavItem>News</NavItem>
          </Link>
        </Navbar.Collapse>
      
      </Navbar>
      </Container>
    )
  }
}

import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Navbar, NavItem, Image, Container, Row, Col, Tab, Nav } from 'react-bootstrap'

class HackerNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar bg='light' expand='lg'>
          {/* Image and Home page link */}
          <Navbar.Brand>
            <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded />
            <Link to='/'>Username</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          {/* collapse menu */}
          <Navbar.Collapse className="justify-content-end">
            <Link to='/hacker-dashboard'>
              <NavItem>Dashboard</NavItem>
            </Link>  
            <Link to='/hacker-challenges'>
              <NavItem>Challenges</NavItem>
            </Link>
            <Link to='/hacker-settings'>
              <NavItem>Settings</NavItem>
            </Link>
            <Link to='/'>
              <NavItem>Logout</NavItem>
            </Link>
          </Navbar.Collapse>        
        </Navbar>
      </Container>
    )
  }
}

export default class HackerBio extends Component {
  render() {
    return (
      <div>
        <HackerNavbar />

        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row style={{'margin-top': 100}}>
              {/* tabbed menu titles */ }
              <Col sm={3}> 
                <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>
                    Bio
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='second'>
                    My Challenges
                  </Nav.Link>
                </Nav.Item>
                </Nav>
              </Col>

              {/* tabbed menu content */}
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    information about the hacker
                  </Tab.Pane>

                  <Tab.Pane eventKey='second'>
                    Challenges - status page
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    )
  }
}

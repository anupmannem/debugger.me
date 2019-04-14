import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { 
  Jumbotron, 
  Container, 
  Button,
  CardGroup,
  Card } from 'react-bootstrap'

import './Home.css'

                { /* Components */ }
export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
                { /* Jumbo Banner */ }
          <Jumbotron>
            <h2>Welcome to debugger.me</h2>
            <p>A platform where talented individuals help you improve your product 
              by finding and resolving bugs in your code
            </p>
          </Jumbotron>

                { /* card for Hacker signup */ }
          <CardGroup>
            <Card>
              <Card.Header>HACKER Signup</Card.Header>
              <Card.Body>
                <Card.Title>
                  If you a hacker please click here to proceed to signup
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <Link to='/signup-hacker'>
                  <Button variant='primary' size='sm'>Proceed</Button>
                </Link>
              </Card.Footer>              
            </Card>

                {/* card for organization signup */}
            <Card>
              <Card.Header>Organization Signup</Card.Header>
              <Card.Body>
                <Card.Title>
                  If you are an organization please click here to proceed to signup
                </Card.Title>
              </Card.Body>
              <Card.Footer>              
                <Link to='/signup-organization'>
                  <Button variant='primary' size='sm'>Proceed</Button>
                </Link>            
              </Card.Footer>

            </Card>
          </CardGroup>
        </Container>          
      </div>
    )
  }
}

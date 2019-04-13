import React, { Component } from 'react'

import { Form, Container, Col, Button } from 'react-bootstrap'

                { /* Components */ }
export default class HackerSignup extends Component {
  render() {
    return (
      <Container>
        <Form>

              { /* First Name & Last Name*/ }
          <Form.Row>
            <Form.Group as={Col} md='4'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='First Name'
              />
            </Form.Group>

            <Form.Group as={Col} md='4'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control                
                type='text'
                placeholder='Last Name'
              />
            </Form.Group>            
          </Form.Row>

              { /* Username & Email */ }
          <Form.Row>
            <Form.Group as={Col} md='4'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='only A-Za-z0-9_'
              />
            </Form.Group>
            <Form.Group as={Col} md='4'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form.Row>

              { /* Password & Confirm Password */ }
          <Form.Row>
            <Form.Group as={Col} md='4'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <Form.Group as={Col} md='4'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type='password'
                placeholder='Confirm Password'
              />
            </Form.Group>
          </Form.Row>

              { /* Terms and submit */ }
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

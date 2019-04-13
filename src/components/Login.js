import React, { Component } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Row>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='enter your username'
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='enter your password'
              />
            </Form.Group>
          </Form.Row>
          <Button type='submit'>Login</Button>
        </Form>
      </Container>
    )
  }
}

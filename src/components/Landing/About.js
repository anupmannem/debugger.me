import React, { Component } from 'react'
import { Row, Col, Tab, Nav, Container } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row style={{'margin-top': 100}}>
            {/* tabbed menu titles */ }
            <Col sm={3}>            
              <Nav.Item>
                <Nav.Link eventKey='first'>
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey='second'>
                  Policy
                </Nav.Link>
              </Nav.Item>
            </Col>

            {/* tabbed menu content */}
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  information about debugger website
                </Tab.Pane>

                <Tab.Pane eventKey='second'>
                  Policy - terms and conditions here
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}

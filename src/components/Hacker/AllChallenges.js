import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, ListGroup, Image } from 'react-bootstrap'

export default class AllChallenges extends Component {
  render() {
    return (
      <Container>
        <ListGroup variant='flush'>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div>
              <Image src='../../public/Assets/seo-and-web-outline-6-19-512.png' rounded style={{float: 'left'}} />
              <h4>Challenge 1<small style={{float: 'right'}}>[participants]</small></h4>
            </div>
            <span>Challenge description in brief here</span>
            <Link to='/challenge-accept'>
              <Button variant='info' style={{float: 'right'}}>Accept</Button>
            </Link>
          </ListGroup.Item>                                        
        </ListGroup>
      </Container>
    )
  }
}

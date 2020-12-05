import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Container>
        <Jumbotron fluid>
          <Container>
            <p style={styles.heading}>Note List</p>
          </Container>
        </Jumbotron>
        <br />
        <Row style={styles.marginT}>
          <Col style={styles.marginT} xs={12} md={4} lg={4}>
            <List></List>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <Form>
              <br />
              <Form.Control type="text" placeholder="Title" />
              <br />
              <Form.Control as="textarea" size="sm" type="text" placeholder="Body text" rows={3} />
            </Form>
            <Button variant="primary">New note</Button> <Button variant="success">Save</Button>{' '}
            <Button variant="danger">Delete</Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

const styles = {
  heading: {
    fontSize: 50,
  },
  marginT: {
    marginTop: 22,
  },
}

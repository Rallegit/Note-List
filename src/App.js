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
            <p style={styles.heading}>Rasmus Södergrens</p>
            <h1 style={styles.heading}>Note List</h1>
          </Container>
        </Jumbotron>
        <br />
        <Row style={styles.marginT}>
          <Col xs={12} md={8} lg={12}>
            <Form>
              <br />
              <Form.Control type="text" placeholder="note title" />
              <br />
              <Form.Control as="textarea" size="sm" type="text" placeholder="Body note" rows={3} />
            </Form>
            <Button variant="primary">Add Note</Button>
            <Button style={styles.btnpadding} variant="success">
              Save
            </Button>
            <Button style={styles.btnpadding} variant="danger">
              Delete
            </Button>{' '}
          </Col>
          <Col style={styles.marginT} xs={12} md={4} lg={12}>
            <List></List>
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
    textAlign: 'Center',
  },
  marginT: {
    marginTop: 22,
  },
  btnpadding: {
    marginLeft: 10,
  },
}

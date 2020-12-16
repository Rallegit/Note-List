import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import List from './components/List'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from './components/Form'
import Button from 'react-bootstrap/Button'
import {getNotes} from './utils/noteHelpers'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <div className="App">
      <Container>
        <Jumbotron fluid style={styles.jumbotronColor}>
          <Container>
            <p style={styles.heading}>Rasmus Södergrens</p>
            <h1 style={styles.heading}>Note List</h1>
          </Container>
        </Jumbotron>
        <Button onClick={onClickNewNote} className="mb-4" size="lg" variant="dark" block>
          New Note
        </Button>
        <br />
        <Form refreshList={refreshList} selectedNote={selectedNote} />
        <Row style={styles.marginT}>
          <Col xs={12} md={8} lg={12}></Col>
          <Col style={styles.marginT} xs={12} md={4} lg={12}>
            <List notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

const styles = {
  jumbotronColor: {
    backgroundColor: 'lightblue',
  },

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

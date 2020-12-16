import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List({selectedNote, setSelectedNote, notes}) {
  const selectNote = (newNote) => {
    setSelectedNote(newNote)
  }

  return (
    <ListGroup as="ul">
      {notes.map((newNote, index) => (
        <ListGroup.Item
          active={selectedNote ? newNote.id === selectedNote.id : false}
          onClick={() => selectNote(newNote)}
          as="li"
        >
          {newNote.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

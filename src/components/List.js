import React, {useState} from 'react'
import {getNotes} from '../utils/noteHelpers'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const selectNote = (newNote) => {
    setSelectedNote(newNote)
  }

  return (
    <ListGroup as="ul">
      {getNotes().map((newNote, index) => (
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

import React, {useState, useEffect} from 'react'
import BootstrapForm from 'react-bootstrap/Form'
import {createNote, updateNote, deleteNote} from '../utils/noteHelpers'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const STATUS_INITIAL_VALUE = ''

export default function Form({selectedNote, refreshList, setSelectedNote}) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
  const [variant, setVariant] = useState('')

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('')
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 4000)
  }, [status])

  useEffect(() => {
    if (selectedNote) return setVariant('')
  }, [variant])

  const onChangeT = (e) => setTitle(e.target.value)
  const onChangeB = (e) => setBody(e.target.value)

  const onSave = (e) => {
    e.preventDefault()
    setTitle('')
    setBody('')
    setStatus('SAVED')
    setVariant('success')
    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }
    createNote(title, body)
    refreshList()
  }
  const onDelete = (e) => {
    e.preventDefault()
    if (!selectedNote) return
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    setTitle('')
    setBody('')
    setStatus('DELETED')
    setVariant('danger')
  }

  return (
    <BootstrapForm>
      <BootstrapForm.Group>
        <br />
        <BootstrapForm.Label>Note Title:</BootstrapForm.Label>
        <BootstrapForm.Control type="text" value={title} onChange={onChangeT} />
        <BootstrapForm.Label>Note Body:</BootstrapForm.Label>
        <BootstrapForm.Control
          value={body}
          onChange={onChangeB}
          as="textarea"
          size="sm"
          type="text"
          rows={3}
        />
      </BootstrapForm.Group>
      <Button size="lg" variant="success" onClick={onSave}>
        Save
      </Button>
      {selectedNote && (
        <Button size="lg" style={styles.btnpadding} variant="danger" onClick={onDelete}>
          Delete
        </Button>
      )}
      <br />
      {status && <Alert variant={variant}>{status}</Alert>}
    </BootstrapForm>
  )
}
const styles = {
  btnWidth: {
    width: 200,
  },
  btnpadding: {
    marginLeft: 10,
  },
}

function initializeNotes() {
  localStorage.setItem('notes', JSON.stringify([]))
  return []
}
export function getNotes() {
  const notes = localStorage.getItem('notes')
  if (!notes) {
    notes = initializeNotes()
  }
  const parsedNotes = JSON.parse(notes)
  return parsedNotes
}

export function createNote(title, body) {
  const notes = getNotes()
  const newNote = {
    id: Date.now(),
    title,
    body,
  }
  notes.unshift(newNote)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}
export function getNote(id) {
  const notes = getNotes()
  return notes.find((note) => note.id === id)
}
export function updateNote(id, title, body) {
  const notes = getNotes()
  const noteUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id: id,
    title: title,
    body: body,
  }
  notes.splice(noteUpdate, 1)
  notes.splice(0, 0, note)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}
export function deleteNote(id) {
  const notes = getNotes()
  const noteDelete = notes.findIndex((note) => note.id === id)
  if (noteDelete >= 0) notes.splice(noteDelete, 1)
  const jsonNoteArray = JSON.stringify(notes)
  localStorage.setItem('notes', jsonNoteArray)
}

import React,{useState} from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'
import BookList from './components/BookList'

function App() {
  const [books,setBooks] = useState([])

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: title
      }
    ]
    setBooks(updatedBooks)
  }

  const handleDeleteBookById = (id) => {
    const updatedBooks = books.filter((book)=>{
      return book.id != id
    })
    setBooks(updatedBooks)
  }

  const handleEditedByIndex = (id, newTitle) => {
    const updatedBooks = books.map((book)=>{
      if (book.id == id) {
        return{...book, title:newTitle}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <>
    <div>
      <BookList books={books} onDelete={handleDeleteBookById} onEdit={handleEditedByIndex}/>
      <BookCreate onCreateBook = {handleCreateBook} />
    </div>
    </>
  )
}

export default App

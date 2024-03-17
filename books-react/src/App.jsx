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

  return (
    <>
    <div>
      <BookList books={books}/>
      <BookCreate onCreateBook = {handleCreateBook}/>
    </div>
    </>
  )
}

export default App

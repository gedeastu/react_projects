import React,{useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'
import BookList from './components/BookList'

function App() {
  const [books,setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])

  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      title:title,
    })
    const updatedBooks = [
      ...books,
    ]
    setBooks(updatedBooks)
  }

  const handleDeleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book)=>{
      return book.id != id
    })
    setBooks(updatedBooks)
  }

  const handleEditedByIndex = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title : newTitle
    })
    const updatedBooks = books.map((book)=>{
      if (book.id == id) {
        return{...book, ...response.data,}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  return (
    <>
    <div>
      <h1>Book List</h1>
      <BookList books={books} onDelete={handleDeleteBookById} onEdit={handleEditedByIndex}/>
      <BookCreate onCreateBook = {handleCreateBook} />
    </div>
    </>
  )
}

export default App

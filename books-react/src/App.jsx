import React,{useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  

  //Fetching Books
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }
  useEffect(()=>{
    fetchBooks()
  },[])


  const [books,setBooks] = useState([])
  //Create Book
  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      title:title,
    })
    const updatedBooks = [
      ...books,response.data
    ]
    setBooks(updatedBooks)
  }

  //Delete Book by Id
  const handleDeleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book)=>{
      return book.id != id
    })
    setBooks(updatedBooks)
  }

  //Edit Book by Id
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
    <div className='w-full flex flex-col items-center gap-10 py-10'>
      <h1>Book List</h1>
      <BookList books={books} onDelete={handleDeleteBookById} onEdit={handleEditedByIndex}/>
      <BookCreate onCreateBook = {handleCreateBook} />
    </div>
    </>
  )
}

export default App

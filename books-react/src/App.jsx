import React,{useState} from 'react'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books,setBooks] = useState([])

  const createBook = (title) => {
    console.log('title is ',title)
  }

  return (
    <>
    <div>
      <BookCreate onCreateBook = {createBook}/>
    </div>
    </>
  )
}

export default App

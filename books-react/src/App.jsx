import React,{useState} from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookShow from './components/BookShow'

function App() {
  const [books,setBooks] = useState([])

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: 123,
        title: title
      }
    ]
    setBooks(updatedBooks)
  }

  const renderBooks = books.map((value,index)=>{
    <BookShow books={value} key={index}/>
  })

  return (
    <>
    <div>
      {renderBooks}
      <BookCreate onCreateBook = {handleCreateBook}/>
    </div>
    </>
  )
}

export default App

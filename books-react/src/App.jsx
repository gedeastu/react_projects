import {useEffect, useContext} from 'react'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'
import useBooksContext from './hooks/use-books-context'

function App() {

  const { fetchBooks } = useBooksContext()

  useEffect(()=>{
    fetchBooks()
  },[fetchBooks])

  return (
    <>
    <div className='w-full flex flex-col items-center gap-10 py-10'>
      <h1>Book List</h1>
      <BookList />
      <BookCreate />
    </div>
    </>
  )
}

export default App

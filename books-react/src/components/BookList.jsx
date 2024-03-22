import React, { useContext, useState } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'
import useBooksContext from '../hooks/use-books-context'

function BookList() {

  const {books} = useBooksContext()

  const renderBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id}/>
  })

  return (
    <>
    <div className='w-screen flex flex-col items-center'>
    {renderBooks}
    </div>
    </>
  )
}

export default BookList
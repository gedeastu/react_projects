import React, { useContext, useState } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'

function BookList() {
  
  const {books} = useContext(BooksContext)

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
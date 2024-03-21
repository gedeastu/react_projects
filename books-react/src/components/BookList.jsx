import React, { useContext, useState } from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'

function BookList({books, onDelete, onEdit}) {
  const {count,incrementCount} = useContext(BooksContext)

  const renderBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
  })

  return (
    <>
    <div className='w-screen flex flex-col items-center'>
    <div className='flex flex-col gap-5 items-center border border-black p-5'>
    {count}
    <button onClick={incrementCount} className='border border-black px-5 py-2'>Count</button>
    </div>
    {renderBooks}
    </div>
    </>
  )
}

export default BookList
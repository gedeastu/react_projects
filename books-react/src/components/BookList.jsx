import React from 'react'
import BookShow from './BookShow'
function BookList({books}) {
  const renderBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id}/>
  })
  return (
    <>
    <h1>{console.log(renderBooks)}</h1>
    <div>
    {renderBooks}
    </div>
    </>
  )
}

export default BookList
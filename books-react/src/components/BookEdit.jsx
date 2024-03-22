import React, { useState,useContext } from 'react'
import BooksContext from '../context/books'
import useBooksContext from '../hooks/use-books-context'

function BookEdit({titleBook, onSubmit}) {

  const {editBook} = useBooksContext()

  const [title,setTitle] = useState(titleBook.title)

  const handleChange = (event) => {

    setTitle(event.target.value)

  }

  const handleSubmit = (event) => {

    event.preventDefault()
    onSubmit()

    editBook(titleBook.id, title)

  }


  return (
   <>
    <form action="" onSubmit={handleSubmit} className='flex flex-col p-5 gap-5'>
      <label htmlFor="">Title</label>
      <input type="text" onChange={handleChange} value={title} className='border border-black'/>
      <button className='bg-blue-400'>save</button>
    </form>
   </>
  )
}

export default BookEdit
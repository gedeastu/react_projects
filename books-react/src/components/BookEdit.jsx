import React, { useState } from 'react'

function BookEdit({titleBook, onSubmit}) {

  const [title,setTitle] = useState(titleBook.title)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(titleBook.id,title)
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
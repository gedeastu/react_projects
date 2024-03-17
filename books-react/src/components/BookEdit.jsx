import React, { useState } from 'react'

function BookEdit({titleBook,onEdit}) {

  const [title,setTitle] = useState(titleBook)

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('New title', title)
  }

  const handleEdited = () => {
    onEdit(title)
  }

  return (
   <>
    <form action="" onSubmit={handleSubmit} className='flex flex-col p-5 gap-5'>
      <label htmlFor="">Title</label>
      <input type="text" onChange={handleChange} value={title} className='border border-black'/>
      <button className='bg-blue-400' onClick={handleEdited}>save</button>
    </form>
   </>
  )
}

export default BookEdit
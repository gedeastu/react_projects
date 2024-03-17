import React,{useState} from 'react'

function BookCreate({ onCreateBook }) {

  const [title,setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    
    onCreateBook(title)

    setTitle('')
  }

  const handleChange = (event) => {
    setTitle(
        (previous) => previous = event.target.value
    )
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='m-5'>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} type="text" onChange={handleChange} className='border border-black'/>
        <button>Create</button>
    </form>
    </>
  )

}

export default BookCreate